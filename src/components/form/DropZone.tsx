import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

function DropZone({
  numberOfFiles = 10,
  onFileDrop,
}: {
  numberOfFiles?: number;
  onFileDrop: (files: File[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  type customFile = File & { preview: string };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },

    onDrop: (acceptedFiles) => {
      const files: customFile[] = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      setFiles(files);
      onFileDrop(files);
    },
    maxFiles: numberOfFiles,
  });

  const thumbs = files.map((file: customFile) => (
    <div
      className="inline-flex rounded-sm border border-solid border-gray-300 mb-2 mr-2 w-full h-full p-1 box-border"
      key={file.name}
    >
      <div className="flex min-w-0 overflow-hidden">
        <img
          src={file.preview}
          className="block w-auto h-full"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: customFile) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="flex flex-col w-full mt-2">
      <div
        className="outline-none"
        {...getRootProps({
          className:
            "w-full p-5 flex flex-col cursor-pointer flex-1 border-[2px] border-dashed rounded-sm border-gray-300 text-gray-400 bg-gray-100 outline-none",
        })}
      >
        <input {...getInputProps()} />
        <p>Drag and drop your image here, or click to select file</p>
      </div>
      <aside className="flex flex-wrap mt-4">{thumbs}</aside>
    </section>
  );
}

export default DropZone;
