// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from 'https://i.pinimg.com/736x/42/3d/08/423d085eb76271bca7ef8ffa49514b22.jpg';

const Feature = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-3 py-8">
         <p className="text-muted-foreground text-sm">
          Brand Genesis- Starts December, 2024
         </p>
          <h3 className="-mt-2 !my-0">Brand Building Accelerator</h3>
          <p className="font-light leading-[1.4] opacity-70">
          Learn the fundamentals of business & launch your online brand, for Youtube, eCom, SAAS, Info Products, etc. (100% online)
            With a group of like-minded founders & early-stage entrepreneurs
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src='https://i.pinimg.com/736x/6b/64/48/6b6448e96137e45016cb0e421359436a.jpg'
            alt="placeholder"
            className="fill object-cover"
            width={500}
            height={500}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
