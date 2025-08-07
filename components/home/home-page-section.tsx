interface HomePageSectionProps {
  title: string;
  subheading: string;
  children: React.ReactNode;
}

export default function HomePageSection({
  title,
  subheading,
  children,
}: HomePageSectionProps) {
  const titleId = title.toLowerCase().replace(/\s+/g, "-") + "-heading";

  return (
    <section aria-labelledby={titleId} className="mx-auto max-w-7xl px-4">
      <h2 id={titleId} className="text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-muted-foreground">{subheading}</p>
      {children}
    </section>
  );
}
