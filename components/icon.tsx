interface IconProps extends React.SVGProps<SVGSVGElement> {
  path: string;
  viewBox?: string;
}

export const Icon = ({ path, viewBox = "0 0 24 24", ...props }: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
    <path d={path} />
  </svg>
);
