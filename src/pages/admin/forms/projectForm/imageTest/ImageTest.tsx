import { useState } from "react";
import { useStorage, useStorageDownloadURL, useStorageTask } from "reactfire";
import { CircularProgress } from "@material-ui/core";
import { LinearProgressWithLabel } from "components";

interface IUploadProgress {
  uploadTask: firebase.default.storage.UploadTask;
  storageRef: firebase.default.storage.Reference;
}

const UploadProgress = ({ uploadTask, storageRef }: IUploadProgress) => {
  const { status, data: uploadProgress } = useStorageTask(
    uploadTask,
    storageRef
  );

  if (status === "loading") {
    return <CircularProgress />;
  }

  const { bytesTransferred, totalBytes } =
    uploadProgress as firebase.default.storage.UploadTaskSnapshot;

  const percentComplete = Math.floor(100 * (bytesTransferred / totalBytes));
  return <LinearProgressWithLabel value={percentComplete} />;
};

const ImageUploadButton = () => {
  const [uploadTask, setUploadTask] = useState<
    firebase.default.storage.UploadTask | undefined
  >(undefined);
  const [ref, setRef] = useState<
    firebase.default.storage.Reference | undefined
  >(undefined);
  const storage = useStorage();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const fileToUpload = fileList[0];
    const newRef = storage.ref("projects").child("id");
    setRef(newRef);

    const uploadTask = newRef.put(fileToUpload);

    uploadTask.then(() => {
      setUploadTask(undefined);
    });
    setUploadTask(uploadTask);
  };

  return (
    <>
      <input type="file" accept="image/png, image/jpeg" onChange={onChange} />
      {uploadTask && ref ? (
        <UploadProgress uploadTask={uploadTask} storageRef={ref} />
      ) : (
        "Start an upload to view progress"
      )}
    </>
  );
};

const FetchImage = ({ storagePath }: any) => {
  const storage = useStorage();

  const { status, data: imageURL } = useStorageDownloadURL(
    storage.ref(storagePath)
  );
  if (status === "loading") {
    return <CircularProgress />;
  }

  return (
    <img
      src={imageURL}
      alt="demo download"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  );
};

export default function Storage() {
  return (
    <>
      <FetchImage storagePath="images/combination_logo.png" />
      <ImageUploadButton />
    </>
  );
}
