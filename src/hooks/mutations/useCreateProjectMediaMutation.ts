import { doc, updateDoc } from "firebase/firestore";
import { IProjectMediaFormSchema } from "hooks";
import { useFirestore, useStorage } from "reactfire";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function useCreateProjectMediaMutation() {
  const storage = useStorage();
  const firestore = useFirestore();

  const uploadCoverImage = async (
    id: string,
    coverImage: IProjectMediaFormSchema["coverImage"]
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
      updateDoc(projectFirestoreDocRef, { coverImage: coverImageUrl });
    } else {
      updateDoc(projectFirestoreDocRef, { coverImage: null });
    }
  };

  const uploadImages = async (
    id: string,
    images: IProjectMediaFormSchema["images"]
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

      updateDoc(projectFirestoreDocRef, { images: filteredFileUrls });
    } else {
      updateDoc(projectFirestoreDocRef, { images: [] });
    }
  };

  const createProjectMediaMutation = async (
    id: string,
    { coverImage, images }: IProjectMediaFormSchema
  ) => {
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

  const editProjectMediaMutation = async (
    id: string | undefined,
    { coverImage, images }: IProjectMediaFormSchema
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

  return { createProjectMediaMutation, editProjectMediaMutation };
}
