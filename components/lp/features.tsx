// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Solarpunk - Creative Designer",
    description:
      "You are an artist, musician, or creator who is looking to build a brand around your art.",
  }/* ,
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Indie Founder - Brand Wizard",
    description:
      "You are a developer aiming for $10k/MRR, but lacking the marketing skills to get there.",
  } */,
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Alchemist - Brand Wizard", 
    description:
      "You are a brand builder... you turn your ideas into reality & create lasting brands.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Cyberpunk - Tech Wizard", 
    description:
      "You are a developper, web3 dev, or crypto enthusiast who is looking to build a brand the future of the web.",
  },
];

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              For who is this for?
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Brand Builders, Brand Wizards, SAAS Founders, Digital Nomads.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
