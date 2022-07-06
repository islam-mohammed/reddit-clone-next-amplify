import React from "react";
import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div className="px-5 min-h-screen max-w-5xl m-auto py-6">
        <article className="prose-sm md:prose w-full m-auto">
          {children}
        </article>
      </div>
    </>
  );
}
