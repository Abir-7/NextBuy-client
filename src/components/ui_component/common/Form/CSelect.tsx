import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller, useFormContext } from "react-hook-form";

interface SelectProps {
  name: string;
  label: string;
  text: string;
  options: {
    value: string;
    label: string;
  }[];
}

const CSelect = ({ name, label, text, options }: SelectProps) => {
  const { control } = useFormContext();

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            disabled={!options}
            onValueChange={field.onChange}
            value={field.value}
          >
            <SelectTrigger>
              <SelectValue placeholder={text} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {options?.map((option, i) => (
                  <SelectItem key={i} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default CSelect;
