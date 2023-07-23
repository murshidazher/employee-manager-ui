import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employees",
  description: "List out all the employees.",
};

interface EmployeesLayoutProps {
  children: React.ReactNode;
}

const EmployeesLayout = ({ children }: EmployeesLayoutProps) => {
  return (
    <>
      <div className="container relative">{children}</div>
    </>
  );
};

export default EmployeesLayout;
