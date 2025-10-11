import React, { useRef, useState } from "react";
import { cn } from "@/shared/lib";

type VideoFileUploaderProps = {
  value?: File | null;
  name: string;
  onChange: (file: File | null) => void;
  onBlur: () => void;

  UploadButton: React.FC<{ onClick: () => void }>;
  FileInfo: React.FC<{ file: File | null; name: string; onRemove: () => void }>;
};

const VideoFileUploader = React.forwardRef<
  HTMLInputElement,
  VideoFileUploaderProps
>(({ value, name, onChange, UploadButton, FileInfo }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleRemove = () => {
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files ? e.target.files[0] : null;
          onChange(file);
        }}
      />

      {!value ? (
        <UploadButton onClick={handleClick} />
      ) : (
        <FileInfo file={value} name={name} onRemove={handleRemove} />
      )}
    </div>
  );
});

VideoFileUploader.displayName = "VideoFileUploader";

export default VideoFileUploader;
