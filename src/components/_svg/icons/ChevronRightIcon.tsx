import { type IconProps } from '@/types/icon';

function ChevronRightIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33641 10L1.70861e-08 8.56719L3.32718 5L1.02163e-07 1.43281L1.33641 1.59365e-08L6 5L1.33641 10Z"
      />
    </svg>
  );
}

export { ChevronRightIcon };
