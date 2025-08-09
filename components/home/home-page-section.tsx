import clsx from "clsx";

interface HomePageSectionProps {
  title?: string;
  subheading?: string;
  className?: string;
  children: React.ReactNode;
}

export default function HomePageSection({
  title,
  subheading,
  className,
  children,
}: HomePageSectionProps) {
  return (
    <section className={clsx("mx-auto my-16 max-w-7xl px-4", className)}>
      <div className="mb-4">
        {title && (
          <h2
            id={title.toLowerCase().replace(/\s+/g, "-") + "-heading"}
            className="text-4xl font-bold tracking-tight"
          >
            {title}
          </h2>
        )}
        {subheading && <p className="text-muted-foreground">{subheading}</p>}
      </div>
      {children}
    </section>
  );
}
