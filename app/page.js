import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home2/About";
import Banner from "@/components/sections/home2/Banner";
import Services from "@/components/sections/home2/Services";
import Cta from "@/components/sections/home2/Cta";
import Testimonial from "@/components/sections/home2/Testimonial";
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <About />
        <Services />
        <Cta />
        <Testimonial />
        <WhyChooseUs />
      </Layout>
    </>
  );
}
