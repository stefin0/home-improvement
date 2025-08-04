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
import { ScrollArea } from "./ui/scroll-area";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "About Us",
    value: "item-1",
    subLinks: [
      { href: "/about-us", text: "About Us" },
      { href: "/faqs", text: "FAQs" },
      { href: "/service-areas", text: "Service Areas" },
      { href: "/careers", text: "Careers" },
      { href: "/financing", text: "Financing" },
      { href: "/blog", text: "Blog" },
    ],
  },
  {
    title: "Services",
    value: "item-2",
    subLinks: [
      { href: "/services", text: "Services" },
      { href: "/vinyl-windows-san-diego", text: "High Performance Windows" },
      { href: "/san-diego-roofing-services", text: "Cool Roofing Systems" },
      { href: "/coolwall-texcote-colors", text: "COOLWALL Colors" },
      { href: "/patio-covers", text: "Patio Covers" },
      { href: "/hvac-services", text: "HVAC Services" },
    ],
  },
  {
    title: "Projects",
    value: "item-3",
    subLinks: [
      { href: "/customer-projects", text: "Customer Projects" },
      { href: "/gallery", text: "Gallery" },
    ],
  },
  {
    title: "Testimonials",
    value: "item-4",
    subLinks: [
      { href: "/customer-testimonials", text: "Customer Testimonials" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="p-4 flex justify-between items-center">
      <Button asChild variant={"outline"}>
        <Link href="/">LOGO</Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            className={`size-8 justify-self-end md:hidden ${pathname === "/" ? "text-primary-foreground" : ""}`}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="p-8 max-h-full">
          <SheetHeader className="p-0">
            <SheetTitle className="text-muted-foreground text-sm font-medium">
              Menu
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="overflow-auto">
            <Accordion type="multiple" className="w-full">
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
                            className="underline justify-start"
                          >
                            {link.text}
                          </Link>
                        </Button>
                      </SheetClose>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <NavigationMenu viewport={false} className="hidden md:flex">
        <NavigationMenuList>
          {navLinks.map((navItem) => (
            <NavigationMenuItem key={navItem.value}>
              <NavigationMenuTrigger
                className={
                  pathname === "/"
                    ? "bg-transparent text-primary-foreground"
                    : ""
                }
              >
                {navItem.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
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
      <Button asChild className="col-span-2 hidden md:inline-flex">
        <Link href="/contact">Get a Free Quote</Link>
      </Button>
    </header>
  );
}
