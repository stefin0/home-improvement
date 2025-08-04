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
import Image from "next/image";
import Link from "next/link";

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
];

export default function Header() {
  return (
    <header className="p-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Company Logo"
          width={200}
          height={100}
          className="w-[clamp(120px,15vw,200px)] h-auto rounded-md"
          priority
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="size-8">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="p-8">
          <SheetHeader className="p-0">
            <SheetTitle className="text-muted-foreground text-sm font-medium">
              Menu
            </SheetTitle>
          </SheetHeader>
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
        </SheetContent>
      </Sheet>
      <Button className="w-full">Get a Quote</Button>
    </header>
  );
}
