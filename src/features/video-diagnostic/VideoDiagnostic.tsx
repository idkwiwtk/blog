import React from "react";
import { cn } from "@/shared/lib";
import { Controller, useFormContext } from "react-hook-form";
import VideoFileUploader from "@/shared/ui/form/VideoFileUploader";

type VideoDiagnosticProps = {
  name: string; // form field name
};

const VideoDiagnostic = ({ name }: VideoDiagnosticProps) => {
  const { control } = useFormContext();

  return (
    <div
      className={cn(
        "border border-red-400",
        "p-4",
        "rounded-md",
        "w-full",
        "flex flex-1 flex-col gap-4",
        "relative"
      )}
    >
      <h1>Video Diagnostic</h1>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <VideoFileUploader
            {...field}
            UploadButton={({ onClick }) => (
              <button
                className={cn(
                  "inline-block",
                  "p-5",
                  "border",
                  "rounded-md",
                  "bg-blue-500",
                  "text-white text-[16px]",
                  "cursor-pointer"
                )}
                type="button"
                onClick={onClick}
              >
                Upload Video
              </button>
            )}
            FileInfo={({ file, name, onRemove }) => (
              <div className="flex flex-col gap-2">
                <p>File Name: {file?.name}</p>
                <p>
                  File Size: {file ? (file.size / (1024 * 1024)).toFixed(2) : 0}{" "}
                  MB
                </p>
                <button type="button" onClick={onRemove}>
                  Remove File
                </button>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};

export default VideoDiagnostic;
