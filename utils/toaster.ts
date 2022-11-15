import { Position, Toaster } from "@blueprintjs/core";

/** Singleton toaster instance. Create separate instances for different options. */
export const AppToaster =
  typeof window !== "undefined"
    ? Toaster.create({
        className: "recipe-toaster",
        position: Position.BOTTOM_LEFT,
        usePortal: true,
      })
    : undefined;
