import React, { useState } from "react"
import { AccordionArrow } from "../icons/PageIcons"
import NestedLinkItems from "./NestedLinkItems"

function NestedItems({ items, key }: any) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <li
        onClick={() => setOpen(!isOpen)}
        key={key}
        className="tracking-wider text-sm text-[#171717] hover:text-[#0b19db] cursor-pointer flex justify-between items-center gap-x-2 group"
      >
        {items?.title}
        {items?.children?.length > 0 && (
          <AccordionArrow
            width={15}
            className={`${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-150`}
          />
        )}
      </li>
      {items?.children?.length > 0 && isOpen && (
        <ul className="rounded absolute top-16 right-0 bg-[#171717] w-1/2 shadow-lg p-1 grid grid-cols-1 gap-2">
          {items?.children?.map((items: any, index: number) => {
            return (
              <NestedLinkItems items={items} key={index} setOpen={setOpen} />
            )
          })}
        </ul>
      )}
    </>
  )
}

export default NestedItems
