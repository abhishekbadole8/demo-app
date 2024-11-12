import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Battery = (props: SvgProps) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={25}
  height={24}
  fill="none"
  {...props}
>
  <path
    fill="#6B6E71"
    d="M16.42 4h-1.67V2h-4v2H9.08c-.73 0-1.33.6-1.33 1.33v15.33c0 .74.6 1.34 1.33 1.34h7.33c.74 0 1.34-.6 1.34-1.33V5.33c0-.73-.6-1.33-1.33-1.33Z"
  />
</svg>
);

export default Battery;
