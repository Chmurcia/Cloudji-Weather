type MainContentProps = { className: string; children: React.ReactNode };

export const MainContent = ({ className, children }: MainContentProps) => {
  return <div className={className}>{children}</div>;
};
