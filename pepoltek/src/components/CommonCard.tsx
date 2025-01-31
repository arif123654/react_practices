import { ReactNode, FC } from "react";

type CardProps = {
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => (
  <div className="p-4 bg-white shadow rounded">{children}</div>
);