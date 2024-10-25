import { Poppins } from "next/font/google";
import "./globals.css";
import BGSvg from "@/public/bbblurry.svg";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
});

export const metadata = {
  title: { template: "%s / R. Grabowski", default: "Portfolio R.Grabowski" },
  description: "Portolfio created in Next.js by Robert Grabowski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased relative">
        {children}{" "}
        {/* <Image
          src={BGSvg}
          alt="bg"
          fill
          className="object-cover object-center bg-fixed z-[-1]"
        /> */}
      </body>
    </html>
  );
}
