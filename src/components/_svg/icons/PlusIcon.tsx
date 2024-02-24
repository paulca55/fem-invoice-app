import { IconProps } from '@/types/icon';

function PlusIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.29 10V6.29H10V3.71H6.29V0H3.71V3.71H0V6.29H3.71V10H6.29Z" />
    </svg>
  );
}

export { PlusIcon };
