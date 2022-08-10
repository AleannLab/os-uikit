import { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill={'none'} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 2.813v12.374M3.938 10.125 9 15.188l5.063-5.063"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 15.188V2.812M14.063 7.875 9 2.812 3.937 7.875"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { ArrowDown, ArrowUp };
