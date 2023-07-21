import { fontSans } from "@murshidazher/employee-manager-ui-lib"

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.className}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
