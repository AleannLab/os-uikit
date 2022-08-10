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

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.188 9H2.812M7.875 3.938 2.812 9l5.063 5.063"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.813 9h12.374M10.125 14.063 15.188 9l-5.063-5.063"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM11 1.5v2M5 1.5v2M2.5 5.5h11"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Camera = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M26 26H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4l2-3h8l2 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Checked = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m20.25 6.75-10.5 10.5L4.5 12"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m13 6-5 5-5-5" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m3 10 5-5 5 5" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Crm = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 18h15a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 6v10.5A1.5 1.5 0 0 0 4.5 18ZM15 21H9M3 14.25h18M12 18v3"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m18.75 5.25-13.5 13.5M18.75 18.75 5.25 5.25"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Dashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.125 4.125H4.875a.75.75 0 0 0-.75.75v14.25c0 .414.336.75.75.75h14.25a.75.75 0 0 0 .75-.75V4.875a.75.75 0 0 0-.75-.75ZM12 4.125v15.75M19.875 12H4.125"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.853 11.934 21 15.638M14.456 13.997l.666 3.778M9.534 13.988l-.665 3.787M5.138 11.934 2.99 15.656M3 9.834c1.575 1.95 4.463 4.416 9 4.416 4.538 0 7.425-2.466 9-4.416"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.58 8.275 2.103 5.834M6.485 6.846l-.49-2.51M9.766 6.792l.397-2.533M12.722 8.106l1.385-2.507M14.173 9.48c-1.074-1.281-3.03-2.889-6.054-2.833-3.024.056-4.918 1.735-5.944 3.055"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={8} cy={10} r={2} fill="current" />
  </svg>
);

const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.25 11.25H12v5.25h.75" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.813 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" fill="current" />
  </svg>
);

const Itinerary = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21 5.25H3a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75ZM15.75 15.75h3M11.25 15.75h1.5M2.25 9.084h19.5"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Link = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" fill="current" />
    <path
      d="m9.881 14.119 4.238-4.244M13.063 15.181l-1.77 1.769a3.002 3.002 0 0 1-4.243-4.244l1.769-1.768M15.181 13.063l1.769-1.77a3 3 0 1 0-4.244-4.243l-1.768 1.769"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pencil = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" fill="current" />
    <path
      d="M9.794 17.5H7a.5.5 0 0 1-.5-.5v-2.794a.494.494 0 0 1 .144-.35l7.5-7.5a.5.5 0 0 1 .712 0l2.788 2.788a.5.5 0 0 1 0 .712l-7.5 7.5a.494.494 0 0 1-.35.144v0ZM12.5 8l3.5 3.5M14.25 9.75l-6 6M9.969 17.469 6.53 14.03"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" fill="current" />
    <path d="M6.5 12h11M12 6.5v11" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const School = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 6v7.5M5.081 20.25a8.259 8.259 0 0 1 13.838 0M21 6l-9 3-9-3 9-3 9 3Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15.872 7.706a5.25 5.25 0 1 1-7.744 0" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Trash = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 3.5h-11M6.5 6.5v4M9.5 6.5v4M12.5 3.5V13a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3.5M10.5 3.5v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  Checked,
  ChevronDown,
  ChevronUp,
  Crm,
  Cross,
  Dashboard,
  EyeClosed,
  EyeOpen,
  Info,
  Itinerary,
  Link,
  Pencil,
  Plus,
  School,
  Trash,
};
