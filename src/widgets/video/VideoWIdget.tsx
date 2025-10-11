import React from "react";
import VideoDiagnostic from "@/features/video-diagnostic/VideoDiagnostic";
import { useForm, FormProvider } from "react-hook-form";
import { cn } from "@/shared/lib";

interface VideoWidgetProps {
  videoFile: File | null;
  videoUrl: string | null;
}

const VideoWidget = () => {
  const form = useForm<VideoWidgetProps>();
  const { handleSubmit } = form;

  const submit = (data: VideoWidgetProps) => {
    console.log("submit", data);
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submit)}>
          <VideoDiagnostic name="video" />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>

      <h1>제출 영상 내용 확인</h1>

      <button className={cn("border")}>test</button>
    </div>
  );
};

export default VideoWidget;
