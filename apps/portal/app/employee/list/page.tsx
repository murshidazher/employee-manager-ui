import { promises as fs } from "fs";
import path from "path";

import { Metadata } from "next";
import { z } from "zod";

import { employeeSchema } from "../shared/data/schema";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export const metadata: Metadata = {
  title: "Employees",
  description: "A list of employees to manage.",
};

// Simulate a database read for employees.
async function getEmployees() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/employee/shared/data/employees.json")
  );

  const employees = JSON.parse(data.toString());

  return z.array(employeeSchema).parse(employees);
}

export default async function ListPage() {
  const employees = await getEmployees();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of employees to manage!
            </p>
          </div>
        </div>
        <DataTable data={employees} columns={columns} />
      </div>
    </>
  );
}
