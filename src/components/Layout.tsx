import { ThemeToggle } from "@/lib";

import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <div>
      <S>
        <div>
          <Link href="/"> Home</Link>
          <Link href="/slick"> slick</Link>
        </div>
        <ThemeToggle />
      </S>
      {children}
    </div>
  );
};

const S = tw.div` 
	flex
	items-center
	justify-between
	bg-violet-500
	rounded-sm
	p-2 m-2
`;
