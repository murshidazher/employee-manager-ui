import { fontSans } from "@murshidazher/employee-manager-ui-lib";

import "@/styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${fontSans.className}`}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
