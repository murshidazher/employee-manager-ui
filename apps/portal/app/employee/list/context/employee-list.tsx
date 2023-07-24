import { createContext, useContext } from "react";

export const EmployeeListContext = createContext({
  updated: true,
  setUpdated: (value: boolean) => {},
});

export const useEmployeeList = () => useContext(EmployeeListContext);
