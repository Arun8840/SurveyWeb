import React from "react"

interface PropsTypes {
  variant?: string
  label: string
  size?: string | any
  className?: string
  onClick?: () => void
}
function Button({
  variant = "Primary",
  size = "medium",
  onClick,
  className,
  label,
}: PropsTypes) {
  const sizeClasses: any = {
    small: "text-sm py-1 px-4",
    medium: "text-base py-2 px-6",
    large: "text-lg py-3 px-8",
  }
  const sizeClass = sizeClasses[size] || sizeClasses.medium

  return (
    <button
      onClick={onClick}
      // style={DefaultStyle?.varient}
      className={`rounded-full hover:bg-[#171717] hover:text-white text-sm tracking-wider  border-gray-300 border-opacity-30 ${sizeClass} hover:scale-105 transition-transform duration-150 hover:shadow-lg ${
        variant === "Primary"
          ? "bg-gradient-to-tr from-[#0b19db] to-[#04bfe5] text-white"
          : "bg-white"
      }`}
    >
      {label}
    </button>
  )
}

export default Button
