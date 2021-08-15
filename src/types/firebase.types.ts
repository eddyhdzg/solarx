import firebase from "firebase";
import { FileWithPath } from "react-dropzone";

export type Timestamp = firebase.firestore.Timestamp;

export interface FilePreview extends FileWithPath {
  preview: string;
}

export type TImage = FileWithPath | string;
export type TImages = TImage[] | null | undefined;
export type TImagesPreview = (FilePreview | string)[]; // Use Only For Previewing Images
