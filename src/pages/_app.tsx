import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/default.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark">
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextThemeProvider>
  );
}
