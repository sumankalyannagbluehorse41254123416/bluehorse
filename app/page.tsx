import Image from "next/image";
import styles from "./page.module.css";
import IntroSection from "@/component/Home/IntroSection";
import DesktopLogoSlider from "@/component/Home/logoSliderdesktop";

export default function Home() {
  return (
    <>
      <IntroSection />
      <DesktopLogoSlider />
    </>
  );
}
