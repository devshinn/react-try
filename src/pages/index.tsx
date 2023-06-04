import Head from "next/head";
import { Inter } from "next/font/google";
import tw from "twin.macro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        <div tw="bg-primary border border-gray-600 dark:bg-blue-400 m-2 p-2 ">
          custom tailwind primary color
        </div>
        <div className="m-2">
          <h1 className="px-10 bg-slate-100 text-blue-700"> heoll</h1>
          <h2 className="px-10 bg-slate-100 text-blue-700"> heoll</h2>
          <h3 className="px-10 bg-slate-100 text-blue-700"> heoll</h3>
        </div>
      </main>
    </>
  );
}
const S = tw.div` 
	bg-gradient-to-r
	from-violet-500 to-fuchsia-50
	rounded-sm
	p-2 m-2
	
`;
