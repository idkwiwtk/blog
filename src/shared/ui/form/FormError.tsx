interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  
  return (
    <span className="text-sm text-red-600 mt-1">
      {message}
    </span>
  );
};