export const Input = ({
  input,
  setInput,
  className,
  placeholder,
  onKey,
}: {
  input: string;
  setInput: (arg0: string) => void;
  className: string;
  placeholder: string;
  onKey: (arg0: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      id="search"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className={className}
      placeholder={placeholder}
      onKeyDown={(e) => onKey(e)}
    />
  );
};
