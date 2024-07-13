import AboutSection from "@/components/Home/AboutSection";
import AccessSection from "@/components/Home/AccessSection/AccessSection";
import BlogSection from "@/components/Home/BlogSection/BlogSection";
import CustomerSection from "@/components/Home/CustomerSection/CustomerSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import IntergationSection from "@/components/Home/IntregationSection/IntergationSection";
import MyCardSection from "@/components/Home/MyCardSection/MyCardSection";
import SendMoneySection from "@/components/Home/SendMoneySection/SendMoneySection";
import ServiceSection from "@/components/Home/ServiceSection/ServiceSection";
import StepsSection from "@/components/Home/StepsSection/StepsSection";
import WhyUsSection from "@/components/Home/WhyUsSection/WhyUsSection";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <MyCardSection />
      <SendMoneySection />
      <StepsSection />
      <WhyUsSection />
      <CustomerSection />
      <IntergationSection />
      <BlogSection />
      <AccessSection />
      <Footer />
    </main>
  );
}
