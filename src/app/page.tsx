import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/component/hero/Hero";
import Scene from "@/component/scene/Scene";

export default function Home() {
  return (
    <>
      <Hero />
      <Scene />
    </>
  );
}
