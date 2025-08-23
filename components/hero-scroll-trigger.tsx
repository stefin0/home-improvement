"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useHeaderStore } from "@/lib/store";

export function HeroScrollTrigger() {
  const ref = useRef(null);
  const { setIsPastHero } = useHeaderStore();
  const isInView = useInView(ref);

  useEffect(() => {
    setIsPastHero(!isInView);
  }, [isInView, setIsPastHero]);

  return <div ref={ref} className="absolute top-[80svh] h-px w-px" />;
}
