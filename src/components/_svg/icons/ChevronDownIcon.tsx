import { type IconProps } from '@/types/icon';

function ChevronDownIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 1.33641L1.93281 0L5.5 3.32718L9.06719 0L10.5 1.33641L5.5 6L0.5 1.33641Z"
      />
    </svg>
  );
}

export { ChevronDownIcon };
