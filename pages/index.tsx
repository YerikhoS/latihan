import { useEffect } from "react";
import AOS from 'aos';
import Navbar from "./components/oragnisms/Navbar";
import MainBanner from "./components/oragnisms/MainBanner";
import TransactionsStep from "./components/oragnisms/TransactionStep";
import FeaturedGame from "./components/oragnisms/FeaturedGame";
import Reached from "./components/oragnisms/Reached";
import Story from "./components/oragnisms/Story";
import Footer from "./components/oragnisms/Footer";

export default function Home() {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar/>
      <MainBanner/>
      <TransactionsStep/>
      <FeaturedGame/>
      <Reached/>
      <Story/>
      <Footer/>
    </>
  );
};

