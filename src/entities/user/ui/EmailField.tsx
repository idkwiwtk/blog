import { useFormContext } from 'react-hook-form';
import { Input } from '@/shared/ui/form';
import type { UserRegistrationData } from '../model/types';

export const EmailField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserRegistrationData>();

  return (
    <Input
      label="이메일"
      type="email"
      placeholder="example@email.com"
      error={errors.email?.message}
      {...register('email')}
    />
  );
};