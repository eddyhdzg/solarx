import { PluginFunc, ConfigType } from "dayjs";

declare const plugin: PluginFunc;

declare module "dayjs" {
  export interface Dayjs {
    tz(timezone?: string, keepLocalTime?: boolean): Dayjs;
    offsetName(type?: "short" | "long"): string | undefined;
  }

  export interface DayjsTimezone {
    (date: ConfigType, timezone?: string): Dayjs;
    (date: ConfigType, format: string, timezone?: string): Dayjs;
    guess(): string;
    setDefault(timezone?: string): void;
  }

  const tz: DayjsTimezone;
}
