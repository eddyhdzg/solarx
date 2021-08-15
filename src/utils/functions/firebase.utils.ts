import { FileWithPath } from "react-dropzone";

export const putStorageItem = (
  storageRef: firebase.default.storage.Reference,
  file: FileWithPath
) => {
  return storageRef.put(file);
};
