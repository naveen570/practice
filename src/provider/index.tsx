import type { ReactNode } from "react";
import { ReduxProvider } from "./redux-provider";

export const ProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};
