import { UsegetFont } from "@/font/LayoutFonts"
import { UsegetData } from "@/utility/Data"
import Button from "@/utility/uiComponents/Button"
import React from "react"
import headerLogo from "../Images/surveyLogo.png"
import Image from "next/image"
import NestedItems from "@/utility/uiComponents/NestedItems"
import { ChartIcons } from "@/utility/icons/PageIcons"
import GradientText from "@/utility/uiComponents/GradientText"
function NavBar() {
  const { NavItems } = UsegetData()
  const { sansNormal, poppinsBold } = UsegetFont()
  return (
    <div className=" fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm z-50">
      <nav
        className={`container mx-auto py-1 hidden justify-between items-center lg:flex ${sansNormal.className} relative`}
      >
        <div className="min-w-[100px] max-w-[200px] h-full flex items-center">
          {/* <Image src={headerLogo} alt="logo" className="object-contain" /> */}
          <ChartIcons width={25}/>
          <GradientText  className={`${poppinsBold.className} text-xl `}>
            
            ZETTA SURVEY
          </GradientText>
        
        </div>
        <ul className="flex gap-4 items-center h-full py-3 select-none">
          {NavItems.map((items, index: number) => {
            return <NestedItems items={items} index={index} />
          })}
          {/* //todo login button */}
          <Button size="small" variant="Secondary" label="Sign-Up" />
          <Button size="small" variant="Primary" label="Login" />
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
