type LinkExternalProps = {
  className?: string;
  hasUnderline?: boolean;
  href: string;
};

const LinkExternal: React.FC<LinkExternalProps> = ({
  children,
  className,
  hasUnderline,
  href,
}) => (
  <a
    href={href}
    target={href.includes('http') ? '_blank' : undefined}
    rel="noopener"
    className={`group relative hover:text-black dark:hover:text-trueGray-300 transition-colors duration-400 ${className}`}
  >
    {children ?? href}
    {hasUnderline && (
      <span className="absolute -bottom-0.5 left-0 w-full h-px rounded bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 scale-0 group-hover:scale-100 transition-transform duration-400" />
    )}
  </a>
);

export default LinkExternal;
