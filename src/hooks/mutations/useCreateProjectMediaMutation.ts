import { IProjectMediaFormSchema } from "hooks";
import { useFirestore, useStorage } from "reactfire";

export default function useCreateProjectMediaMutation() {
  const storage = useStorage();
  const firestoreProjectsRef = useFirestore().collection("projects");

  const createProjectMediaMutation = async (
    id: string,
    { coverImage, images }: IProjectMediaFormSchema
  ) => {
    let coverImagePromise: Promise<void> | undefined;

    // Modify Cover Image
    if (coverImage !== undefined) {
      const coverImageRef = storage
        .ref("projects")
        .child(id)
        .child("coverImage");
      if (coverImage?.length) {
        const fileToUpload = coverImage[0];
        if (typeof fileToUpload === "string")
          return new Error("File type error");
        const uploadCoverImage = await coverImageRef.put(fileToUpload);
        const coverImageUrl = await uploadCoverImage.ref.getDownloadURL();
        coverImagePromise = firestoreProjectsRef
          .doc(id)
          .update({ coverImage: coverImageUrl });
      } else {
        coverImagePromise = firestoreProjectsRef
          .doc(id)
          .update({ coverImage: null });
      }
    }

    const results = await Promise.all([coverImagePromise]);
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
      const coverImageRef = storage
        .ref("projects")
        .child(id)
        .child("coverImage");
      if (coverImage?.length) {
        const fileToUpload = coverImage[0];
        if (typeof fileToUpload === "string")
          return new Error("File type error");
        const uploadCoverImage = await coverImageRef.put(fileToUpload);
        const coverImageUrl = await uploadCoverImage.ref.getDownloadURL();
        coverImagePromise = firestoreProjectsRef
          .doc(id)
          .update({ coverImage: coverImageUrl });
      } else {
        coverImagePromise = firestoreProjectsRef
          .doc(id)
          .update({ coverImage: null });
      }
    }

    // Images
    if (images !== undefined) {
      const imagesRef = storage.ref("projects").child(id).child("images");
      if (images?.length) {
        const fileUploads = images.map(async (file, index) => {
          if (typeof file === "string") return undefined;
          return imagesRef.child(`${index}`).put(file);
        });

        const uploadRequests = await Promise.all(fileUploads);
        const fileURLReqs = uploadRequests.map((f) => {
          return f?.ref?.getDownloadURL() || undefined;
        });

        const fileUrls: (string | undefined)[] = await Promise.all(fileURLReqs);
        const filteredFileUrls = fileUrls.filter(
          (url) => url !== undefined
        ) as string[];

        imagesPromises = firestoreProjectsRef
          .doc(id)
          .update({ images: filteredFileUrls });
      } else {
        imagesPromises = firestoreProjectsRef.doc(id).update({ images: [] });
      }
    }

    const results = await Promise.all([coverImagePromise, imagesPromises]);
    return results;
  };

  return { createProjectMediaMutation, editProjectMediaMutation };
}
