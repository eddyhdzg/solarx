import {
  Breakpoints,
  Breakpoint,
} from "@material-ui/core/styles/createBreakpoints";

const BREAKPOINTS = {
  xxs: 0,
  xs: 400,
  sm: 768,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export default function createBreakpoints(
  breakpoints: Partial<
    {
      unit: string;
      step: number;
    } & Breakpoints
  >
): Breakpoints {
  const { values = BREAKPOINTS, unit = "px", step = 5, ...other } = breakpoints;

  const keys = Object.keys(values) as Breakpoint[];

  function up(key: Breakpoint) {
    const value = typeof values[key] === "number" ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key: Breakpoint) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up(keys[0]);
    }

    const value =
      typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
    // @ts-ignore
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start: Breakpoint, end: Breakpoint) {
    const endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
    );
  }

  function only(key: Breakpoint) {
    return between(key, key);
  }

  function width(key: Breakpoint) {
    return values[key];
  }

  return {
    keys,
    values,
    // @ts-ignore
    up,
    // @ts-ignore
    down,
    // @ts-ignore
    between,
    only,
    width,
    ...other,
  };
}
