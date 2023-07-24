import { ReloadIcon } from "@radix-ui/react-icons";
import * as React from "react";

const Loading = () => (
  <div className="flex flex-row justify-center align-middle">
    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    <span>Please wait</span>
  </div>
);

export default Loading;
