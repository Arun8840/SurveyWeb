import { UsegetFont } from "@/font/LayoutFonts"
import { UsegetData } from "@/utility/Data"
import React from "react"

function SurveyUseage() {
  const { poppinsBold, poppinsNormal } = UsegetFont()
  const { UseageOfSurveyData, SurveyPerformanceData } = UsegetData()
  // #fafafa
  return (
    <div className="bg-white grid place-items-center gap-4 min-h-[70vh] lg:p-10">
      <div className="container mx-auto  flex flex-col ">
        <h1
          className={`text-[32px] p-3 bg-gradient-to-b from-[#3d3d3d]/90 to-[#171717] bg-clip-text text-transparent text-center  tracking-wider ${poppinsBold.className} capitalize `}
        >
          how enterprise customers are using ZettaSurvey ?
        </h1>
        <div className="h-1 bg-gradient-to-l from-[#190482] via-[#2F58CD] to-[#B931FC] w-1/2 mx-auto rounded-full"></div>
        <div className="flex-1">
          <div className="grid lg:grid-cols-4 h-fit gap-2 p-5 ">
            {UseageOfSurveyData.map((items, index) => {
              return (
                <div
                key={index}
                  className={` p-3 w-full min-h-[100px] rounded tracking-wider bg-white  ${poppinsNormal.className} `}
                >
                  <div className="flex items-center space-x-2">
                    <span className="mdi mdi-hand-pointing-right" />
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
    </div>
  )
}

export default SurveyUseage
