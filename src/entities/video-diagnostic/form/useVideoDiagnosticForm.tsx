import { useForm } from "react-hook-form";

export type VideoDiagnosticFormValues = {
  videoFile: File | null;
  videoUrl: string | null;
};

export type UseVideoDiagnosticFormProps = {
  defaultValues?: Partial<VideoDiagnosticFormValues>; // Allow partial default values
};

const defaultValues: VideoDiagnosticFormValues = {
  videoFile: null,
  videoUrl: null,
};

const useVideoDiagnosticForm = ({
  defaultValues,
}: UseVideoDiagnosticFormProps) => {
  const form = useForm<VideoDiagnosticFormValues>({
    defaultValues,
  });
  // form logic here

  return { form };
};

export default useVideoDiagnosticForm;
