import { IconProps } from '@/types/Icon';

function ChevronLeftIcon({ size = 10, color, ...props }: IconProps) {
  return (
    <svg
      width={size * 0.6}
      height={size}
      fill={color || 'currentColor'}
      viewBox="0 0 6 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.66359 0L6 1.43281L2.67282 5L6 8.56719L4.66359 10L0 5L4.66359 0Z"
      />
    </svg>
  );
}

export { ChevronLeftIcon };