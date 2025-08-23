import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialButton } from "@/components/ui/custom-buttons";
import { getNavLinks } from "@/config/nav";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = await getNavLinks();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Column 1: Company Information */}
        <div>
          <h3 className="font-semibold">{siteConfig.name}</h3>
          <p className="text-sm">{siteConfig.description}</p>
        </div>

        {/* Column 2: Navigation Links */}
        <nav className="grid grid-cols-2 gap-2 xl:grid-cols-4">
          {navLinks.map((section) => (
            <div key={section.value}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul>
                {section.subLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-foreground text-sm underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <ul>
            <li className="flex items-center gap-2 text-sm">
              <Phone className="size-[0.875rem] shrink-0" />
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-foreground underline"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Mail className="size-[0.875rem] shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-foreground underline"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <MapPin className="size-[0.875rem] shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </li>
            {/* Social media links */}
            <div className="flex gap-2 pt-2">
              {siteConfig.socials.map((social) => (
                <li key={social.name}>
                  <SocialButton
                    social={social}
                    variant={"outline"}
                    size={"icon"}
                    className="size-8"
                  />
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="border-t py-2 text-center text-sm">
        &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
