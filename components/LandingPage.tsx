import { UsegetFont } from "@/font/LayoutFonts"
import Button from "@/utility/uiComponents/Button"
import GradientText from "@/utility/uiComponents/GradientText"
import Inputfield from "@/utility/uiComponents/Inputfield"
import Link from "next/link"
import React from "react"

function LandingPage() {
  const { poppinsBold, poppinsNormal } = UsegetFont()
  return (
    <div className="backgroundBanner">
      <div className="min-h-screen flex-1 container mx-auto grid lg:grid-cols-2 place-items-center p-3">
        <div>
          <h1
            className={`text-[36px] lg:text-[60px] text-white tracking-wider ${poppinsBold.className} text-center lg:text-start`}
          >
            &ldquo;Share Your Thoughts and Shape the Future with Our
            Survey&rdquo;
          </h1>
          <p
            className={`text-white text-sm lg:text-base tracking-wider py-5 ${poppinsNormal.className} !font-light text-center lg:text-start`}
          >
            ZettaSurvey is packed with features to help you quickly and easily
            reach respondents and capture feedback and opinions.
          </p>
        </div>

        <div className="w-full h-full p-2 grid place-items-center">
          <div className="lg:w-4/5 rounded-lg bg-white shadow-lg p-4 flex flex-col">
            <h1 className={`${poppinsNormal} text-3xl`}>Create your account</h1>
            <form className={`py-3 flex-1 ${poppinsNormal.className}`}>
              <Inputfield label="userName" name="userName" type="text" />

              <Inputfield label="Business email" name="email" type="text" />
              <div className="py-10 flex justify-end">
                <Button
                  size="medium"
                  variant="Primary"
                  label="CREATE ACCOUNT"
                />
              </div>
              <small className="tracking-wide text-gray-400">
                Already have an account ?{" "}
                <Link
                  href={"/"}
                  className="text-[#0b19db] font-semibold inline"
                >
                  Log in here
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
