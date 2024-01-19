"use client"
import ChallengesData from "@/components/ChallengesData"
import Clients from "@/components/Clients"
import FeaturesCard from "@/components/FeaturesCard"
import Footer from "@/components/Footer"
import IndustryFeatures from "@/components/IndustryFeatures"
import LandingPage from "@/components/LandingPage"
import NavBar from "@/components/NavBar"
import SurveyUseage from "@/components/SurveyUseage"
import WhyUseSurvey from "@/components/WhyUseSurvey"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <NavBar />
      <LandingPage />
      <WhyUseSurvey />
      <IndustryFeatures />
      <ChallengesData />
      <SurveyUseage />
      <FeaturesCard />
      <Clients />
      <Footer />
    </main>
  )
}
