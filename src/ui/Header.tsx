type HeaderProps = { className: string; children: React.ReactNode };

export const Header = ({ className, children }: HeaderProps) => {
  return <div className={className}>{children}</div>;
};
