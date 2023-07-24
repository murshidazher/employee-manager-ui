"use client";

import useApi from "@/hooks/api";
import { addEmployee } from "@/services/employee/add-employee";
import { updateEmployee } from "@/services/employee/update-employee";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@murshidazher/employee-manager-ui";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Employee,
  EmployeeAddForm,
  employeeAddFormSchema,
} from "../data/schema";

interface UpsertEmployeeProfileProps {
  profile?: Employee;
}

const UpsertEmployeeProfileView = ({ profile }: UpsertEmployeeProfileProps) => {
  const { execute: addEmployeePayload } = useApi<unknown>(addEmployee);
  const { execute: updateEmployeePayload } = useApi<unknown>(updateEmployee);

  const router = useRouter();

  const form = useForm<EmployeeAddForm>({
    resolver: zodResolver(employeeAddFormSchema),
    defaultValues: profile,
  });

  const onSubmit: SubmitHandler<EmployeeAddForm> = useCallback(
    async (value) => {
      if (!profile) {
        // add
        addEmployeePayload(value);
      } else {
        // update
        updateEmployeePayload(profile.id, value);
      }

      await router.push("/employee");
    },
    []
  );

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="m-8 grid gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="M">Male</SelectItem>
                      <SelectItem value="F">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full md:ml-auto md:w-[200px]">
            {!profile ? "Add" : "Save"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export { UpsertEmployeeProfileView };
