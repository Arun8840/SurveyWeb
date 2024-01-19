import { UsegetFont } from "@/font/LayoutFonts"
import { UsegetData } from "@/utility/Data"
import bannerImage from "../Images/ChallengeImage.png"
import React from "react"
import Image from "next/image"

function ChallengesData() {
  const { poppinsBold, poppinsNormal } = UsegetFont()
  return (
    <div className="p-2 lg:pt-10 grid place-items-center">
      <div className="container grid lg:grid-cols-2 p-2">
        <div className="w-full h-full">
          <Image
            src={bannerImage}
            alt="bannerImage"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-fit mx-auto lg:mx-0">
            <h1 className="text-sm font-semibold py-1">WHAT WE DO</h1>
            <div className="h-1 bg-gradient-to-l from-[#190482] via-[#2F58CD] to-[#B931FC] rounded-full"></div>
          </div>
          <h1
            className={`text-[32px] bg-gradient-to-b from-[#3d3d3d]/90 to-[#171717] bg-clip-text text-transparent tracking-wider ${poppinsBold.className} capitalize text-center lg:text-start`}
          >
            We help you solve your greatest business challenges.
          </h1>
          <div className="flex-1 flex flex-col gap-5 tracking-wider">
            <div className={`flex flex-col  ${poppinsNormal.className}`}>
              <h1 className={`!font-bold`}>Be ready for what comes next.</h1>
              <p className="text-gray-400 text-sm leading-6">
                As your business needs change, you need to be able to
                pivot—fast. Our adaptable architecture helps you do just that.
              </p>
            </div>
            <div className={`flex flex-col  ${poppinsNormal.className}`}>
              <h1 className={`!font-bold`}>
                Empower decisions at every level.
              </h1>
              <p className="text-gray-400 text-sm leading-6">
                With one source for financial, people, and operational data,
                everyone can access real-time insights to make sound decisions.
              </p>
            </div>
            <div className={`flex flex-col  ${poppinsNormal.className}`}>
              <h1 className={`!font-bold`}>
                A technology foundation you can trust.
              </h1>
              <p className="text-gray-400 text-sm leading-6">
                We never stop innovating. And you can count on us to deliver
                technology that fuels your growth and keeps your data safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengesData
