import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { EB_Garamond, Reddit_Mono } from "next/font/google";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "@/public/placeholder.jpg";

// Initialize the font
const ebGaramond = EB_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Button
            asChild
            className="not-prose mb-6 flex w-fit md:-mt-10"
            size="sm"
            variant="outline"
          >
             <Link href="/">
             To Build, Create, Learn with Your Highest Intelligence
            </Link> 
          </Button>
          <h1 className={`!mb-1 text-5xl font-medium ${ebGaramond.className}`}>
            <Balancer>
              A Digital Path to Human Intelligence & Mastery
            </Balancer>
          </h1>
          
          <h3 className="md:mt-3 md:text-m md:mb-5 text-muted-foreground">
            <Balancer>
              To actualize human creativity with the help of masters, teachers & yogis
              <br/> The tools to live in surrender, abundance & presence
            </Balancer>
          </h3>

          <Button className="bg-[#222222] ">
           Portal Opening Soon
          </Button>

          <div className="flex flex-row my-4">
            <div className="flex flex-col items-center">
              <Image 
                src="/art/image 39.png"
                alt="Background image"
                className="h-full w-full object-cover"
                width={200}
                height={200}
                priority
              />
              <p className="text-center font-bold">Presence</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Image 
                src="/art/image 40.png"
                alt="Background image"
                className="h-full w-full object-cover"
                width={200}
                height={200}
                priority
              />
              <p className=" text-center font-bold">Creativity</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Image 
                src="/art/image 41.png"
                alt="Background image"
                className="h-full w-full object-cover"
                width={200}
                height={200}
                priority
              />
              <p className=" text-center font-bold">Mastery</p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
