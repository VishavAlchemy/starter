import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { EmailCTA } from '@/components/7dc/emailcta'

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "@/public/placeholder.jpg";
import SignUpFormReact from "../ui/form-loops";

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
              A 7-Day Challenge - Brand Genesis <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-1 font-bold">
            <Balancer>
              A 7-Day Challenge to Uncover the Brand Genesis System
            </Balancer>
          </h1>
          <h3 className="md:mt-3 md:text-[15px] md:mb-5 text-muted-foreground">
            <Balancer>
               A framework that top-brands like Apple, Nike, Lululemon helped to shape their brand. Passed over to you. (the same system I used to create a brand to 6000+ customers)
            </Balancer>
          </h3>
{/*           <EmailCTA />
 */}          
 <SignUpFormReact/>
           <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
          <Image 
            className="h-full w-full object-cover"
            src="/brandgenesis.png" 
            alt="Hero Video"
            width={1000}
            height={1000}
            priority
            quality={100}
          />
          </div> 
        </div>
      </Container>
    </Section>
  );
}
