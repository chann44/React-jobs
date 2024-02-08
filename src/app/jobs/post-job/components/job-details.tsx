"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLAttributes } from "react";

const jobFormSchema = z.object({
  title: z.string().min(2).max(50),
  workType: z.string(),
  seniorityLevel: z.string(),
  description: z.string().max(200),
  jobType: z.string(),
  location: z.string(),
  workPermit: z.string(),
  salary: z.number(),
  applyTarget: z.string(),
});

export function JobDetailsForm() {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      description: "",
      applyTarget: "",
    },
  });

  function onSubmit(values: z.infer<typeof jobFormSchema>) {
    console.log(values);
  }

  return (
    <section className="flex flex-col gap-y-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium">Describe Your Opening</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Jr. React Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work type</FormLabel>
                <FormControl>
                  <Input placeholder="Jr. React Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seniorityLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level of seniority</FormLabel>
                <FormControl>
                  <Input placeholder="Jr. React Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Jr. React Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save Changes</Button>
        </form>
      </Form>
    </section>
  );
}

type SelectTabProps = HTMLAttributes<HTMLDivElement>;

export function SelectTab({ children }: SelectTabProps) {
  return <div className="flex gap-4">{children}</div>;
}

type SelectTabItemProps = HTMLAttributes<HTMLDivElement> & {};

export function SelectTabItem({ onClick, children }: SelectTabItemProps) {
  return (
    <div className="px-6 py-3" onClick={onClick}>
      {children}
    </div>
  );
}
