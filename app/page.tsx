import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Hero from "@/components/lp/hero";
import Features from "@/components/lp/features";
import Footer from "@/components/lp/footer";
import FAQ from "@/components/lp/faq";
import CTA from "@/components/lp/cta";
import FirstOffer from "@/components/lp/first-offer";
export default function Home() {
  return (
    <Main>
      <Hero />
{/*       <FirstOffer />
 */}    {/*   <Features />
      <FAQ /> */}
{/*       <CTA />
 */}      <Footer />
    </Main>
  );
}

