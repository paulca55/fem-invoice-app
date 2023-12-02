import { IconProps } from '@/types/icon';

function ChevronUpIcon({ size = 10, color, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      fill={color || 'currentColor'}
      viewBox="0 0 10 6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.66359L1.43281 6L5 2.67282L8.56719 6L10 4.66359L5 -8.9407e-08L0 4.66359Z"
      />
    </svg>
  );
}

export { ChevronUpIcon };
