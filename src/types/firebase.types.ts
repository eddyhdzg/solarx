import { Timestamp as Test } from "firebase/firestore";
import { FileWithPath } from "react-dropzone";

export type Timestamp = Test;

export interface FilePreview extends FileWithPath {
  preview: string;
}

export type TImage = FileWithPath | string;
export type TImages = TImage[] | null | undefined;
export type TImagesPreview = (FilePreview | string)[]; // Use Only For Previewing Images
