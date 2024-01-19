import { Lato, Mukta, Open_Sans, Poppins, Roboto } from "next/font/google"
const sansNormal = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})

const sansBold = Open_Sans({
  weight: "800",
  subsets: ["greek-ext"],
  display: "swap",
})

const poppinsNormal = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "block",
})

const poppinsBold = Poppins({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
})

const robotoNormal = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
})
const robotoBold = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "block",
})
export const UsegetFont = () => {
  return {
    sansNormal,
    sansBold,
    robotoNormal,
    robotoBold,
    poppinsNormal,
    poppinsBold,
  }
}
