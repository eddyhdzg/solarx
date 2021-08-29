import { FileWithPath } from "react-dropzone";
import { FirebaseStorage, ref, uploadBytesResumable } from "firebase/storage";

export const putStorageItem = (
  storageRef: FirebaseStorage,
  file: FileWithPath
) => {
  return uploadBytesResumable(ref(storageRef), file);
};
