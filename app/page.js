/* import Image from "next/image"; */
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const billian = localFont({ src: "../fonts/Billian.otf" });

export default function Home() {
  return <h1 className={billian.className}>hello next</h1>;
}
