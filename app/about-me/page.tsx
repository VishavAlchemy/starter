import Image from "next/image";
import Balancer from "react-wrap-balancer";

// UI Components
import { Section, Container } from "@/components/craft";

// Assets
import ProfileImage from "@/public/vishavprofile.png"; // Replace with your profile image

export default function AboutMe() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-[45%]">
          <h1 className="text-5xl font-bold mb-2">
            <Balancer>hi this is Vishav</Balancer>
          </h1>
          <p className=" mt-4 text-muted-foreground mb-4 text-lg">
            <Balancer>
              I used to be a degen gamer. 
              <br className="mb-1.5"></br>
              Turned into a brand builder.
              <br className="mb-1.5"></br>
              Started my first business at 13.
              <br className="mb-1.5"></br>
              I sold posture correctors through FB ads.
              <br className="mb-1.5"></br>
              I started to meditate & reading books.
              <br className="mb-1.5"></br>
              I bought 300 masks & sold them across Montreal.
              <br className="mb-1.5"></br>
              We made $3,500k in 5 days.
              <br className="mb-1.5"></br>
              I built & sold computers & also gaming consoles.
              <br className="mb-1.5"></br>
              I finished college & looking for what was for me.
              <br className="mb-1.5"></br>
              I joined the HG Coaching program.
              <br className="mb-1.5"></br>
              I started a clothing brand at 20.
              <br className="mb-1.5"></br>
              I scaled that business to 6000+ customers (~50kMRR).
              <br className="mb-1.5"></br>
              First three months. Went from 0 to 150k.
              <br className="mb-1.5"></br>
              Next 3 months. Went from 150k to 0.
              <br className="mb-1.5"></br>
              I got help & got the brand back up.
              <br className="mb-1.5"></br>
              I started to share knowledge with other entrepreneurs.
              <br className="mb-1.5"></br>
              We started a group called the Straw Hat Nomads.
              <br className="mb-1.5"></br>
              I started to go deeper into the world of meditation.
              <br className="mb-1.5"></br>
              Started to travel to SF, LA, Bangalore, & more.
              <br className="mb-1.5"></br>
              Got to coach a 5+ people on their inner/biz problems.
              <br className="mb-1.5"></br>
              I started a community coworking space in Montreal for creators & founders.
              <br className="mb-1.5"></br>
              It lasted for 3 months until I realized I was not ready to run a space.
              <br className="mb-1.5"></br>
              I started to code & built 6+ mini-apps.
              <br className="mb-1.5"></br>
              The ego was in the way.
              <br className="mb-1.5"></br>
              I started to read more books.
              <br className="mb-1.5"></br>
              The ego was in the way.
              <br className="mb-1.5"></br>
              <br className="mb-1.5"></br>
              <br className="mb-1.5"></br>



              I recently realized the following:
              <br className="mb-1.5"></br>
              The inner world is perfect.
              <br className="mb-1.5"></br>
              The outer world is imperfect.
              <br className="mb-1.5"></br>

              In one work takes place.
              <br className="mb-1.5"></br>
              In one rest takes place.
              <br className="mb-1.5"></br>
              The master is the one who lives fully in both.
            </Balancer>
          </p>
        </div>
      </Container>
    </Section>
  );
}
