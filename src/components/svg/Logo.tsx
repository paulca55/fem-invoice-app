import { IconProps } from '@/types/icon';

function Logo({ size = 40, color, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.95}
      viewBox="0 0 40 38"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.6942 0.292236L20 19L29.3058 0.292236C35.6645 3.6408 40 10.3141 40 18C40 29.0457 31.0457 38 20 38C8.9543 38 0 29.0457 0 18C0 10.3141 4.33546 3.6408 10.6942 0.292236Z" />
    </svg>
  );
}

export { Logo };
