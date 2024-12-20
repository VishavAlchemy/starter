// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { 
  Palette, // for Solarpunk/Creative
  Rocket, // for Indie Founder
  Beaker, // Changed from Flask
  Terminal, // for Cyberpunk
  Globe, // for Nomad
} from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Day 1 - Introduction & Hedgehog Concept",
    description:
      "A introduction to our community & starting with why. The hedgehog concept a concept from good to great by Jim Collins.",
  },
  {
    icon: <Beaker className="h-6 w-6" />,
    title: "Day 2 - Uncover Your Zone of Genius & Superpower", 
    description:
      "Building on what you learned in day 1, we will dive into your zone of genius.",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Day 3 - Micro Niche to Macro Cultural Trends", 
    description:
      "A deep dive into your niche & understanding the greater trends around your specific target demographic.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Day 4 - Defining your Brand Identity & Brand Aura", 
    description:
      "What feeling, sensations & vibe does your brand evoke?",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Day 5 - How to Build to Sell", 
    description:
      "Understanding the core customers to design what they want & how to be unbiased in creation.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Day 6 - The Principles of Great Brands in the 2.0 Era", 
    description:
      "A deep dive into the principles of great brands & how to apply them to your brand.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Day 7 - The 2.0 Identity & the Roadmap Ahead", 
    description:
      "How to actualize your brand & embody the new founder identity.",
  },
];

const Feature = () => {
  // Define color classes for each index
  const titleColors = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-400",
    "text-indigo-500",
    "text-purple-500",
  ];

  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              What you will learn in the next 7 days
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
             With teachings from Chip Wilson (founder of Lululemon), Tommy Hilfiger, Steve Jobs & other great founders.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className={`text-xl ${titleColors[index]}`}>{title}</h4>
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
