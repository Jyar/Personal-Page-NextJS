import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { MenuHeader } from "@/Components/menu-header";
import { Footer } from "@/Components/footer";
import { Content } from "@/Components/content";
// import { Projects } from "@/Components/firebase/projects";
// import { AWSSES } from "@/Components/aws/awsSES";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Localhost Item Logger</title>
        <meta name="description" content="Item Logger build with Nextjs" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>
      <header>
        <MenuHeader />
      </header>
      <main>
        {/* <AWSSES />
        <Projects /> */}
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
