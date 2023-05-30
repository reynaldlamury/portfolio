/* import Image from "next/image"; */
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const billian = localFont({ src: "../assets/fonts/Billian.otf" });

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className={billian.className}>hello next</h1>;
    </>
  );
}
