import { UsegetFont } from "@/font/LayoutFonts"
import { UsegetData } from "@/utility/Data"
import React from "react"

function IndustryFeatures() {
  const { poppinsBold, poppinsNormal } = UsegetFont()
  const { FeaturesData } = UsegetData()
  return (
    <div className="bg-[#eeeeee]  grid gap-4 p-2 lg:p-5">
      {/* //todo features */}
      <div className="container mx-auto flex flex-col ">
        <h1
          className={`text-[32px] bg-gradient-to-b from-[#3d3d3d]/90 to-[#171717] bg-clip-text text-transparent text-start lg:text-center tracking-wider ${poppinsBold.className} capitalize p-3`}
        >
          Industry Leading Features & Usability
        </h1>
        <div className="h-1 bg-gradient-to-l from-[#190482] via-[#2F58CD] to-[#B931FC] w-1/3 mx-auto rounded-full"></div>
        <div className="grid lg:grid-cols-3 gap-2 flex-1 pt-3">
          {FeaturesData.map((items,index) => {
            return (
              <div
              key={index}
                className={`p-3 w-full min-h-[100px] rounded tracking-wider bg-white  ${poppinsNormal.className} `}
              >
                <div className="flex items-center space-x-2">
                  <span
                    className={`mdi ${
                      "mdi-" + items.icon
                    } text-3xl bg-gradient-to-tr from-[#0b19db] to-[#04bfe5]  bg-clip-text text-transparent`}
                  />

                  <h1 className={`!font-bold`}>{items?.title}</h1>
                </div>
                <p className="text-gray-600 pt-2 text-sm leading-6 text-justify">
                  {items?.content}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default IndustryFeatures
