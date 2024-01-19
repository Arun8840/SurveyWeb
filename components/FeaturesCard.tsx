import { UsegetFont } from "@/font/LayoutFonts"
import { UsegetData } from "@/utility/Data"
import { Check } from "@/utility/icons/PageIcons"
import Button from "@/utility/uiComponents/Button"
import React from "react"

function FeaturesCard() {
  const { surveyFeatures } = UsegetData()
  const { poppinsBold, robotoNormal } = UsegetFont()
  return (
    <div className="grid place-items-center p-5 gap-5 bg-[#eeeeee]">
      <div>
        {" "}
        <h1
          className={`text-[32px] bg-gradient-to-b from-[#3d3d3d]/90 to-[#171717] bg-clip-text text-transparent tracking-wider ${poppinsBold.className} capitalize text-center lg:text-start`}
        >
          ZettaSurvey features
        </h1>
        <div className="h-1 bg-gradient-to-l from-[#190482] via-[#2F58CD] to-[#B931FC] w-1/3 mx-auto rounded-full"></div>
      </div>
      <ul className="container mx-auto h-full grid  rounded-lg bg-white divide-y">
        {surveyFeatures.map((items, index: number) => {
          return (
            <li key={index} className=" grid lg:grid-cols-2 first:rounded-r-lg">
              <div className="flex justify-center items-center p-3">
                <h1>{items?.title}</h1>
              </div>

              <div className="p-3 bg-[#171717] text-white">
                <ul className={`${robotoNormal.className} tracking-wider`}>
                  {items?.points.map((keyPoints, index: number) => {
                    return (
                      <li
                        key={index + 1}
                        className="text-[15px] py-1 flex items-center gap-x-2"
                      >
                        <Check width={15} />
                        {keyPoints}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
        <li className="p-4 flex justify-center">
          <Button size="large" variant="Primary" label="Contact Us" />
        </li>
      </ul>
    </div>
  )
}

export default FeaturesCard
