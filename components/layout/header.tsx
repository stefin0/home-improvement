"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/nav";
import { CTAButton } from "@/components/ui/custom-buttons";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const HERO_SCROLL_THRESHOLD = 0.8;
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsPastHero(latest > window.innerHeight * HERO_SCROLL_THRESHOLD);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn("top-0 z-50 w-full transition-colors", {
        sticky: !isHomePage,
        fixed: isHomePage,
        "bg-background border-b shadow-sm": !isHomePage || isPastHero,
        "border-0 bg-transparent": isHomePage && !isPastHero,
      })}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <Button asChild variant={"outline"}>
          <Link href="/">LOGO</Link>
        </Button>

        {/* Mobile: Navigation Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className={cn(
                "size-8 justify-self-end md:hidden",
                isHomePage &&
                  !isPastHero &&
                  "text-primary-foreground bg-transparent",
              )}
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-full p-8">
            <SheetHeader className="p-0">
              <SheetTitle className="text-muted-foreground text-sm font-medium">
                Menu
              </SheetTitle>
            </SheetHeader>
            <SheetClose asChild>
              <CTAButton />
            </SheetClose>
            <ScrollArea className="overflow-auto">
              <Accordion type="multiple" className="w-full">
                <nav>
                  {navLinks.map((navItem) => (
                    <AccordionItem value={navItem.value} key={navItem.value}>
                      <AccordionTrigger className="text-lg">
                        {navItem.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col text-balance">
                        {navItem.subLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Button
                              asChild
                              variant={"link"}
                              className="text-foreground"
                            >
                              <Link
                                href={link.href}
                                className="justify-start underline"
                              >
                                {link.text}
                              </Link>
                            </Button>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </nav>
              </Accordion>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {/* Desktop: Navigation Menu */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((navItem) => (
              <NavigationMenuItem key={navItem.value}>
                <NavigationMenuTrigger
                  className={cn(
                    isHomePage &&
                      !isPastHero &&
                      "text-primary-foreground bg-transparent",
                  )}
                >
                  {navItem.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-52 gap-4">
                    {navItem.subLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link href={link.href}>{link.text}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop: Call-To-Action Button */}
        <CTAButton className="col-span-2 hidden md:inline-flex" />
      </div>
    </motion.header>
  );
}
