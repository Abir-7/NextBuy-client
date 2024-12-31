"use client";
import React, { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  FieldValues,
  DefaultValues,
} from "react-hook-form";

interface FormProps<T extends FieldValues> {
  children: ReactNode;
  onFromSubmit: (data: T) => Promise<void>;
  defaultValues?: DefaultValues<T>;
}

const CForm = <T extends FieldValues>({
  children,
  onFromSubmit,
  defaultValues,
}: FormProps<T>) => {
  const methods = useForm<T>({ defaultValues });

  const onSubmit = async (data: T) => {
    await onFromSubmit(data);
    methods.reset(defaultValues); // Reset form to default values after submission
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CForm;
