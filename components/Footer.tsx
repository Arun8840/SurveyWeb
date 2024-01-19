import { UsegetFont } from "@/font/LayoutFonts"
import Image from "next/image"
import React from "react"
import headerLogo from "../Images/surveyLogo.png"
import { ChartIcons } from "@/utility/icons/PageIcons"
import GradientText from "@/utility/uiComponents/GradientText"
function Footer() {
  const { poppinsNormal, poppinsBold } = UsegetFont()
  return (
    <div
      className={`bg-[#171717] p-5 ${poppinsNormal.className} min-h-[40vh] flex flex-col justify-between`}
    >
      <footer
        className={`container mx-auto min-h-[300px] flex items-start lg:justify-evenly flex-wrap gap-5 tracking-wider `}
      >
        {/* <div className="min-w-[100px] max-w-[200px]">
          <Image src={headerLogo} alt="logo" className="object-contain" />
        </div> */}
        <div className="min-w-[100px] max-w-[200px] h-full flex items-center">
          {/* <Image src={headerLogo} alt="logo" className="object-contain" /> */}
          <ChartIcons width={20} className="fill-[#171717] stroke-[#171717]" />
          <GradientText
            className={`${poppinsBold.className} text-xl bg-gradient-to-l from-[#0b19db] to-[#04bfe5]  bg-clip-text text-transparent`}
          >
            ZETTA SURVEY
          </GradientText>
        </div>
        <div className="w-full lg:w-fit">
          <h1 className={`capitalize !font-bold py-3 text-white`}>
            by solutions
          </h1>
          <ul className={`text-xs text-white flex flex-col gap-1`}>
            <li className="cursor-pointer">Customer Experience</li>
            <li className="cursor-pointer">Patient Experience</li>
            <li className="cursor-pointer">Employee Experience</li>
            <li className="cursor-pointer">Employee Satisfaction</li>
          </ul>
        </div>
        <div className="w-full lg:w-fit">
          <h1 className={`capitalize !font-bold py-3 text-white`}>features</h1>
          <ul className={` text-white flex flex-col gap-1 text-xs`}>
            <li className="cursor-pointer">Creating Surveys</li>
            <li className="cursor-pointer">Personalisation</li>
            <li className="cursor-pointer">Sending Surveys</li>
            <li className="cursor-pointer">Collecting Responses</li>
            <li className="cursor-pointer">Analysing Reports</li>
            <li className="cursor-pointer">Security</li>
          </ul>
        </div>
        <div className="w-full lg:w-fit">
          <h1 className={`capitalize !font-bold py-3 text-white`}>company</h1>

          <ul className={`text-xs text-white flex flex-col gap-1`}>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Clients</li>
            <li className="cursor-pointer">Partners</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Gallery</li>
          </ul>
        </div>
      </footer>
      <small className="text-center pt-5 lg:text-end text-white tracking-wider">
        Copyright © 2022 SkyStack LLC. All Rights reserved. PoweredBy
        ZettaStack.
      </small>
    </div>
  )
}

export default Footer
