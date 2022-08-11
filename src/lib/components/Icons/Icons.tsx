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

const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={7} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.75 9.375 1.375 5 5.75.625" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={7} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.368.629 5.75 4.996 1.382 9.38" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
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
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.5 7.5h-11M10.5 10.5v4M13.5 10.5v4M16.5 7.5V17a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V7.5M14.5 7.5v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={0.5} y={0.5} width={23} height={23} rx={11.5} stroke="current" />
  </svg>
);

const BankCard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 5.25H3a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75ZM15.75 15.75h3M11.25 15.75h1.5M2.25 9.084h19.5" />
  </svg>
);

const Pinion = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.338 5.044c.15.215.282.443.393.68l1.619.9c.202.906.204 1.845.006 2.75l-1.625.9a4.607 4.607 0 0 1-.393.682l.03 1.856a6.502 6.502 0 0 1-2.38 1.382l-1.594-.957a5.505 5.505 0 0 1-.788 0l-1.587.95c-.886-.28-1.7-.749-2.388-1.375l.032-1.85a5.006 5.006 0 0 1-.394-.687l-1.619-.9a6.375 6.375 0 0 1-.006-2.75l1.625-.9a4.6 4.6 0 0 1 .394-.681L3.63 3.187a6.5 6.5 0 0 1 2.382-1.38l1.593.955a5.52 5.52 0 0 1 .788 0l1.587-.95c.886.28 1.701.75 2.388 1.375l-.031 1.857Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Report = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
  </svg>
);

const Student = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 6v7.5M5.081 20.25a8.259 8.259 0 0 1 13.838 0M21 6l-9 3-9-3 9-3 9 3Z" />
    <path d="M15.872 7.706a5.25 5.25 0 1 1-7.744 0" />
  </svg>
);

const Module = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.25 4.5H3.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.375 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM10.125 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      fill="current"
    />
  </svg>
);

const Box = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 7 12 2 2 7v10l10 5 10-5V7ZM2 7l10 5M12 22V12M22 7l-10 5M17 4.5l-10 5" />
  </svg>
);

const Filter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.29.75h13.42a.625.625 0 0 1 .462 1.047l-5.133 5.648a.61.61 0 0 0-.164.422v4.422a.616.616 0 0 1-.281.524l-2.5 1.664a.625.625 0 0 1-.969-.516V7.867a.61.61 0 0 0-.164-.422L1.828 1.797A.625.625 0 0 1 2.29.75v0Z"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Magnifier = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.063 15.625a6.562 6.562 0 1 0 0-13.125 6.562 6.562 0 0 0 0 13.125ZM13.703 13.703 17.5 17.5"
      stroke="current"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5 11.5H4.362L2.62 1.912A.5.5 0 0 0 2.13 1.5H1M5 14a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 5 14ZM11.5 14a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.906 9h7.85a.993.993 0 0 0 .982-.819L13.5 4H3"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={92}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h92v26.941H0z" />
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#b" transform="matrix(.00312 0 0 .01064 -.01 -.149)" />
      </pattern>
      <image
        id="b"
        width={346}
        height={114}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const Snowflake = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 4v8M6.5 2.5 8 4l1.5-1.5M6.5 13.5 8 12l1.5 1.5M4.538 6l6.925 4M2.488 6.55 4.538 6l-.55-2.05M12.012 12.05l-.55-2.05 2.05-.55M4.538 10l6.925-4M3.988 12.05l.55-2.05-2.05-.55M13.512 6.55 11.462 6l.55-2.05"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Tent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 8.725V13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8.725M3.375 2.5h9.25a.506.506 0 0 1 .481.362L14 6H2l.894-3.138a.506.506 0 0 1 .481-.362v0Z"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6v1a2 2 0 1 1-4 0V6M10 6v1a2 2 0 1 1-4 0V6M14 6v1a2 2 0 1 1-4 0V6"
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Receipt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5V3a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 8.5V7a.5.5 0 0 1 .5-.5 1.5 1.5 0 0 0 0-3A.5.5 0 0 1 0 3V1.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 5a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z"
      fill="current"
    />
  </svg>
);

const Pen = (props: SVGProps<SVGSVGElement>) => (
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

export {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  BankCard,
  Box,
  Calendar,
  Camera,
  Cart,
  Checked,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Crm,
  Cross,
  Dashboard,
  EyeClosed,
  EyeOpen,
  Filter,
  Info,
  Itinerary,
  Link,
  Logo,
  Pen,
  Pencil,
  Pinion,
  Plus,
  Magnifier,
  Module,
  Receipt,
  Report,
  School,
  Snowflake,
  Student,
  Tent,
  Trash,
};
