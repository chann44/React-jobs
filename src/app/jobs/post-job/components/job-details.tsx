"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filters } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const jobFormSchema = z.object({
  title: z.string().min(2).max(50),
  workType: z.string(),
  seniorityLevel: z.string(),
  description: z.string().max(200),
  locationType: z.string(),
  location: z.string(),
  workPermit: z.string(),
  salary: z.string(),
  applyTarget: z.string().url(),
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filters.workType.map((item, index) => {
                        return (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a seniority level requried for this job" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filters.sinorityLevels.map((item, index) => {
                        return (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Banglore, india" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type of locaton" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filters.locationType.map((item, index) => {
                        return (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input placeholder="$" {...field} />
                </FormControl>
                <FormDescription>
                  It should be monthly amount and also currency is dollors
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="applyTarget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apply Target</FormLabel>
                <FormControl>
                  <Input placeholder="url" {...field} />
                </FormControl>
                <FormDescription>
                  URL (http://) or email (@) where candidates can apply to this
                  job
                </FormDescription>
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
                  <Textarea
                    placeholder="Description about opening"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Save Changes</Button>
        </form>
      </Form>
    </section>
  );
}
