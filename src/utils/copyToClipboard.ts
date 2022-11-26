import { AppToaster } from "./toaster";

export const copyToClipboard = (text: string) => {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(text);
    AppToaster?.show({ message: "Copied to clipboard", intent: "success" });
  } else {
    AppToaster?.show({
      message: "Failed to copy to clipboard",
      intent: "danger",
    });
  }
};
