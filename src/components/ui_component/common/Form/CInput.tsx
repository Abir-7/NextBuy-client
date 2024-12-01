"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | "date" | "file";
}

const CInput = ({ type, name, label }: InputProps) => {
  const { register } = useFormContext();
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        {...register(name, { required: `${name} is required.` })}
      />
    </div>
  );
};

export default CInput;
