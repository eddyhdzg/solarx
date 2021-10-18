import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { IProjectMediaSchema } from "hooks";
import { useFirestore, useStorage } from "reactfire";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function useEditProjectMediaMutation() {
  const storage = useStorage();
  const firestore = useFirestore();

  const uploadCoverImage = async (
    id: string,
    coverImage: IProjectMediaSchema["coverImage"]
  ) => {
    const projectFirestoreDocRef = doc(firestore, "projects", id);
    if (coverImage?.length) {
      const coverImageStorageRef = ref(storage, `projects/${id}/coverImage`);
      const fileToUpload = coverImage[0];
      if (typeof fileToUpload === "string") {
        return undefined;
      }
      await uploadBytesResumable(coverImageStorageRef, fileToUpload);
      const coverImageUrl = await getDownloadURL(coverImageStorageRef);
      updateDoc(projectFirestoreDocRef, {
        lastUpdate: serverTimestamp(),
        coverImage: coverImageUrl,
      });
    } else {
      updateDoc(projectFirestoreDocRef, {
        lastUpdate: serverTimestamp(),
        coverImage: null,
      });
    }
  };

  const uploadImages = async (
    id: string,
    images: IProjectMediaSchema["images"]
  ) => {
    const projectFirestoreDocRef = doc(firestore, "projects", id);
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

      updateDoc(projectFirestoreDocRef, {
        lastUpdate: serverTimestamp(),
        images: filteredFileUrls,
      });
    } else {
      updateDoc(projectFirestoreDocRef, {
        lastUpdate: serverTimestamp(),
        images: [],
      });
    }
  };

  const editProjectMediaMutation = async (
    id: string | undefined,
    { coverImage, images }: IProjectMediaSchema
  ) => {
    if (!id) return new Error("ID Error");
    let coverImagePromise: Promise<void> | undefined;
    let imagesPromises: Promise<void> | undefined;

    // Modify Cover Image
    if (coverImage !== undefined) {
      coverImagePromise = uploadCoverImage(id, coverImage);
    }

    // Images
    if (images !== undefined) {
      imagesPromises = uploadImages(id, images);
    }

    const results = await Promise.all([coverImagePromise, imagesPromises]);
    return results;
  };

  return editProjectMediaMutation;
}
