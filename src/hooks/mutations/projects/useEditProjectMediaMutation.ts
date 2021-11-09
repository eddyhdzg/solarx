import { doc, setDoc } from "firebase/firestore";
import { IEditProjectMediaSchema } from "hooks";
import { useFirestore, useStorage } from "reactfire";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function useEditProjectMediaMutation() {
  const storage = useStorage();
  const firestore = useFirestore();

  const uploadImages = async (
    id: string,
    images: IEditProjectMediaSchema["images"]
  ) => {
    const projectFirestoreDocRef = doc(
      firestore,
      "projects",
      id,
      "data",
      "content"
    );

    if (images?.length) {
      const imagesStorageRef = ref(storage, `projects/${id}/images`);
      const fileUploads = images.map(async (file, index) => {
        if (typeof file === "string") {
          return undefined;
        }
        return uploadBytesResumable(ref(imagesStorageRef, `${index}`), file);
      });

      const uploadRequests = await Promise.all(fileUploads);
      const fileURLReqs = uploadRequests.map((f, index) => {
        return f
          ? getDownloadURL(ref(imagesStorageRef, `${index}`))
          : undefined;
      });

      const fileUrls: (string | undefined)[] = await Promise.all(fileURLReqs);
      const filteredFileUrls = fileUrls.filter(
        (url) => url !== undefined
      ) as string[];

      setDoc(
        projectFirestoreDocRef,
        {
          images: filteredFileUrls,
        },
        {
          merge: true,
        }
      );
    } else {
      setDoc(
        projectFirestoreDocRef,
        {
          images: [],
        },
        {
          merge: true,
        }
      );
    }
  };

  const editProjectMediaMutation = async (
    id: string | undefined,
    { images }: IEditProjectMediaSchema
  ) => {
    if (!id) return new Error("ID Error");
    let imagesPromises: Promise<void> | undefined;

    // Images
    if (images !== undefined) {
      imagesPromises = uploadImages(id, images);
    }

    const results = await Promise.all([imagesPromises]);
    return results;
  };

  return editProjectMediaMutation;
}
