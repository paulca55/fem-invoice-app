import { type IconProps } from '@/types/icon';

function ChevronLeftIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.66359 0L6 1.43281L2.67282 5L6 8.56719L4.66359 10L0 5L4.66359 0Z"
      />
    </svg>
  );
}

export { ChevronLeftIcon };
