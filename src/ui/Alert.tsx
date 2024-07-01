import { useEffect, useState } from "react";

export type AlertProps = { desc: string; head: string };

export const Alert = (alert: AlertProps) => {
  const [level, setLevel] = useState<string | null>(null);

  useEffect(() => {
    if (alert.head?.toLowerCase().includes("yellow"))
      setLevel("text-yellow-600");
    else if (alert.head?.toLowerCase().includes("orange"))
      setLevel("text-orange-600");
    else if (alert.head?.toLowerCase().includes("red"))
      setLevel("text-red-600");
    else setLevel("text-orange-600");
  }, [alert.head]);

  return (
    <>
      <p className={`mb-4 font-bold ${level}`}>{alert.desc}</p>
    </>
  );
};
