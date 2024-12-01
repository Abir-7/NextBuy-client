import { Button } from "@/components/ui/button";
import React from "react";
interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
}
const CButton = ({ type, text }: ButtonProps) => {
  return (
    <div>
      <Button type={type}>{text}</Button>
    </div>
  );
};

export default CButton;
