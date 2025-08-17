"use client";

import { ReactLenis, useLenis } from "lenis/react";

type LenisProviderProps = {
  children: React.ReactNode;
};

function LenisProvider({ children }: LenisProviderProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export { LenisProvider, useLenis };
