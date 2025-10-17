import { useFormContext } from 'react-hook-form';
import { Input } from '@/shared/ui/form';
import type { UserRegistrationData } from '../model/types';

interface PasswordFieldProps {
  name: 'password' | 'confirmPassword';
  label: string;
}

export const PasswordField = ({ name, label }: PasswordFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserRegistrationData>();

  return (
    <Input
      label={label}
      type="password"
      placeholder="********"
      error={errors[name]?.message}
      {...register(name)}
    />
  );
};