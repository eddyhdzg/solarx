export default function RadioButtonGradientChecked(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        fill="url(#prefix__paint0_linear_728:87)"
      />
      <path
        d="M12 17a5 5 0 100-10 5 5 0 000 10z"
        fill="url(#prefix__paint1_linear_728:87)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_728:87"
          x1={1.207}
          y1={25.096}
          x2={25.951}
          y2={22.132}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBDE51" />
          <stop offset={1} stopColor="#F2805A" />
          <stop offset={1} stopColor="#F2805A" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_728:87"
          x1={6.604}
          y1={18.548}
          x2={18.976}
          y2={17.066}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBDE51" />
          <stop offset={1} stopColor="#F2805A" />
          <stop offset={1} stopColor="#F2805A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
