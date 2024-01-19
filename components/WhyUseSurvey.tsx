import { UsegetFont } from "@/font/LayoutFonts"
import { UsegetData } from "@/utility/Data"
import bannerImage from "../Images/whyuseZettaSurvey.png"
import React from "react"
import Image from "next/image"
import { Add } from "@/utility/icons/PageIcons"

function WhyUseSurvey() {
  const { poppinsBold, poppinsNormal } = UsegetFont()
  const { MainPointOfSurvey } = UsegetData()
  return (
    <div className="p-2 grid place-items-center">
      <div className="container grid lg:grid-cols-2 p-2">
        <div className="p-2 flex flex-col gap-5">
          <h1
            className={`text-[32px] bg-gradient-to-b from-[#3d3d3d]/90 to-[#171717] bg-clip-text text-transparent tracking-wider ${poppinsBold.className} capitalize text-center lg:text-start`}
          >
            Create surveys effortlessly with our unique user-friendly interface.
          </h1>
          <ul
            className={`grid lg:grid-cols-2 tracking-wider ${poppinsNormal.className}`}
          >
            {MainPointOfSurvey.map((points) => {
              return (
                <li className="text-sm tracking-wider py-3 flex items-center gap-1">
                  <Add width={15} />
                  {points}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="w-full h-full">
          <Image
            src={bannerImage}
            alt="bannerImage"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default WhyUseSurvey
