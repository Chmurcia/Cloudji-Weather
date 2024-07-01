type ButtonProps = {
  event: () => void;
  className?: string;
  children: React.ReactNode;
};

export const Button = ({ event, className, children }: ButtonProps) => {
  return (
    <button className={className} onClick={event}>
      {children}
    </button>
  );
};
