import React from "react"
import dunkinLogo from "../Images/dunkindonuts.png"
import hmLogo from "../Images/h&m.png"
import subwayLogo from "../Images/subway.png"
import ultabeautyLogo from "../Images/ultabeauty.png"
import Image from "next/image"
import { UsegetFont } from "@/font/LayoutFonts"
function Clients() {
  const { poppinsBold } = UsegetFont()
  return (
    <div className="min-h-[200px] grid place-items-center bg-gray-50">
      {/* <div>
        <h1
          className={`text-[32px] p-3 bg-gradient-to-b from-[#3d3d3d]/90 to-[#171717] bg-clip-text text-transparent text-center  tracking-wider ${poppinsBold.className} capitalize `}
        >
          Our clients
        </h1>
        <div className="h-1 bg-gradient-to-l from-[#190482] via-[#2F58CD] to-[#B931FC] w-1/2 mx-auto rounded-full"></div>
      </div> */}
      <ul className="p-2 flex items-center justify-evenly flex-wrap container">
        <li className="max-w-[150px]">
          <Image className="object-contain" src={dunkinLogo} alt="dunkinLogo" />
        </li>
        <li className="max-w-[150px]">
          <Image className="object-contain" src={hmLogo} alt="hmLogo" />
        </li>
        <li className="max-w-[150px]">
          <Image className="object-contain" src={subwayLogo} alt="subwayLogo" />
        </li>
        <li className="max-w-[150px]">
          <Image
            className="object-contain"
            src={ultabeautyLogo}
            alt="ultabeautyLogo"
          />
        </li>
      </ul>
    </div>
  )
}

export default Clients
