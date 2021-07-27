import { IProjectMediaFormSchema } from "hooks";
import { useFirestore, useStorage } from "reactfire";

export default function useCreateProjectMediaMutation() {
  const storage = useStorage();
  const projectsRef = useFirestore().collection("projects");

  const createProjectMediaMutation = async (
    id: string,
    { coverImage }: IProjectMediaFormSchema
  ) => {
    if (!coverImage?.length) return new Error("No files");
    const fileToUpload = coverImage[0];
    const storageRef = storage.ref("projects").child(id);
    const uploadFile = await storageRef.put(fileToUpload);
    const url = await uploadFile.ref.getDownloadURL();
    return projectsRef.doc(id).update({ coverImage: url });
  };

  const editProjectMediaMutation = async (
    id: string | undefined,
    { coverImage }: IProjectMediaFormSchema
  ) => {
    if (!id) return new Error("ID Error");
    if (!coverImage?.length) return new Error("No files");
    const fileToUpload = coverImage[0];
    const storageRef = storage.ref("projects").child(id);
    const uploadFile = await storageRef.put(fileToUpload);
    const url = await uploadFile.ref.getDownloadURL();
    return projectsRef.doc(id).update({ coverImage: url });
  };

  return { createProjectMediaMutation, editProjectMediaMutation };
}
