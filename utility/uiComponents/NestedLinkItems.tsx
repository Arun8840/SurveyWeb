import React from "react"
import { Check } from "../icons/PageIcons"

function NestedLinkItems({ items, index, setOpen }: any) {
  const handleClicklinks = () => {
    setOpen(false)
  }
  return (
    <div
      onClick={handleClicklinks}
      key={index}
      className="p-1 rounded text-white hover:bg-white hover:text-[black] transition-colors duration-200 cursor-pointer flex items-center gap-2"
    >
      <div className="w-fit p-3 border border-gray-300 border-opacity-5 rounded grid place-items-center">
        <Check width={20} />
      </div>
      <div className="flex-1 rounded w-fit">
        <h1 className="capitalize"> {items?.title}</h1>{" "}
        <p className="text-xs tracking-wider capitalize">{items?.content}</p>
      </div>
    </div>
  )
}

export default NestedLinkItems
