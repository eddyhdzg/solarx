import { Timestamp } from "firebase/firestore";
import { FileWithPath } from "react-dropzone";

export type TTimestamp = Timestamp;
export type FirestoreQueryStatus = "loading" | "error" | "success";

export interface FilePreview extends FileWithPath {
  preview: string;
}

export type SubmitForm = (
  e?: React.BaseSyntheticEvent<object, any, any> | undefined
) => Promise<void>;

export type TImage = FileWithPath | string;
export type TImages = TImage[] | null | undefined;
export type TImagesPreview = (FilePreview | string)[]; // Use Only For Previewing Images
