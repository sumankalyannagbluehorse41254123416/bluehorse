import Image from "next/image";
import styles from "./page.module.css";
import IntroSection from "@/component/Home/IntroSection";
import DesktopLogoSlider from "@/component/Home/logoSliderdesktop";
import BannerSlider from "@/component/Home/BannerSlider";
import OurWork from "@/component/Home/OurWork";

export default function Home() {
  return (
    <>
      <IntroSection />
      <DesktopLogoSlider />
      <BannerSlider />
      <OurWork />
    </>
  );
}
