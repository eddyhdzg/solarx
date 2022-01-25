import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <rect width={24} height={16} rx={2} fill="#f2f0ec" />
    <path data-name="Rectangle" fill="#f26122" d="M9.45 3.83h5.11v8.34H9.45z" />
    <path
      d="M10 8a5.31 5.31 0 0 1 2-4.17 5.3 5.3 0 1 0 0 8.34A5.29 5.29 0 0 1 10 8Z"
      fill="#ea1d25"
    />
    <path
      data-name="Path"
      d="M20.58 8A5.31 5.31 0 0 1 12 12.17 5.31 5.31 0 0 0 14.023 8 5.31 5.31 0 0 0 12 3.83 5.3 5.3 0 0 1 20.58 8Z"
      fill="#f69e1e"
    />
  </svg>
);

export default SvgComponent;
