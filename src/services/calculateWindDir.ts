export const calculateWindDir = (dir: number): string => {
  if (dir > 342.5 || dir < 27.5) return "North";
  else if (dir < 72.5) return "North-West";
  else if (dir < 112.5) return "West";
  else if (dir < 162.5) return "South-West";
  else if (dir < 207.5) return "South";
  else if (dir < 252.5) return "South-East";
  else if (dir < 297.5) return "East";
  else if (dir <= 342.5) return "North-East";
  else throw new Error("Wind direction is out of scope");
};
