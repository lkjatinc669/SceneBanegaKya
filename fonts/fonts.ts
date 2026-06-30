import { Manrope, Mukta, Rozha_One, Henny_Penny, Poppins } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
});

const rozha = Rozha_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rozha",
});

const hennyPenny = Henny_Penny({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-henny-penny",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export { manrope, mukta, rozha, hennyPenny, poppins };