import React from "react"

interface InputTypes {
  name: string
  label: string
  type: string
}
function Inputfield({ name, label, type }: InputTypes) {
  return (
    <>
      <label htmlFor={label} className="block text-sm tracking-wider py-2 capitalize">
        {label}
      </label>
      <input className="border-b w-full p-2 outline-purple-800" name={name} type={type} />
    </>
  )
}

export default Inputfield
