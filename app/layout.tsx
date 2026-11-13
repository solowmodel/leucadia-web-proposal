import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leucadia Web Proposal",
  description: "Mobile Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 w-screen h-screen overflow-hidden bg-black bg-[url('/back2.gif')] bg-cover bg-center bg-no-repeat bg-fixed">
        {children}
      </body>
    </html>
  );
}