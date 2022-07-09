import React from "react";
import Nav from "./Nav";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div className="w-full bg-slate-100 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center min-h-screen max-w-5xl p-6">
          <article
            className="prose-sm md:prose w-full prose-a:no-underline dark:prose-invert"
            style={{ width: "100%" }}
          >
            {children}
          </article>
        </div>
      </div>
    </>
  );
}
