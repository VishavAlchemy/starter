import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "@/public/placeholder.jpg";

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
              Build, Learn, Sell, Play <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-1 font-bold">
            <Balancer>
              A place for a new-generation of digital brand wizards.
            </Balancer>
          </h1>
          <h3 className="md:mt-3 md:text-m md:mb-5 text-muted-foreground">
            <Balancer>
              A brand wizard: A person who is able to materialize the unpopular or unseen into reality by building through purpose & profit.
            </Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
          <video 
            className="h-full w-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://i.pinimg.com/736x/b6/ba/e7/b6bae79b56e4c06fb8f961f54c9ca2f0.jpg"
          >
            <source 
              src="/videos/hero.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </Container>
    </Section>
  );
}
