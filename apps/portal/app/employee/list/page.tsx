import { Metadata } from "next";

import DataList from "./components/data-list";

export const metadata: Metadata = {
  title: "Employees",
  description: "A list of employees to manage.",
};

const ListPage = () => {
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
        <DataList />
      </div>
    </>
  );
};

export default ListPage;
