import { useFormContext } from 'react-hook-form';
import { Input } from '@/shared/ui/form';
import type { UserRegistrationData } from '../model/types';

export const UserNameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserRegistrationData>();

  return (
    <Input
      label="사용자명"
      placeholder="사용자명을 입력하세요"
      error={errors.username?.message}
      {...register('username')}
    />
  );
};