import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  path: string;
  size?: string | number;
  viewBox?: string;
}

function Icon({
  path,
  size = 24,
  viewBox = "0 0 24 24",
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      className={cn("shrink-0", className)}
      {...props}
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
}

export { Icon };
