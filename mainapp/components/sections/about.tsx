import Image from "next/image";
import { Sparkles } from "lucide-react";

const teamAvatars = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/LMHHOuZ2Gf6ITDH0kgxvm6mzclQ-4.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/LzVWC24FXoHEeYrMOfQ1uINyL4-5.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/43ni9PGsRtjf3qW4LcpsCgS3k-6.jpeg",
];


const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32 overflow-hidden">
       <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/noise.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.03,
        }}
       />
      <div className="container max-w-[1400px] mx-auto px-6 xl:px-20">
        <div className="flex justify-center">
          <div className="flex items-center justify-center rounded-lg border border-primary bg-accent py-2 px-4">
            <p className="text-sm font-medium text-accent-foreground tracking-[0.05em]">
              About us
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 items-center">
          {/* Left Column: Text */}
          <div className="max-w-[712px] mx-auto lg:mx-0">
            <p className="text-[32px]/[1.3] font-semibold text-text-primary text-center lg:text-left">
              Hi, we're MATRIXWAYZ{" "}
              <Sparkles fill="currentColor" className="inline-block h-[30px] w-[30px] text-primary align-[-6px]" />{" "}
              We deliver cutting-edge AI solutions through both innovative products and tailored services. As a product-based and service-based company, we build and release our own AI-powered products while providing custom solutions to help organizations become more effective and competitive. Our motivated team{" "}
              <span className="inline-flex -space-x-3 items-center align-middle">
                {teamAvatars.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Team member ${index + 1}`}
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-background object-cover"
                  />
                ))}
              </span>{" "}
              of experts is focused on building world-class AI solutions that drive real business results.
            </p>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative mt-24 lg:mt-0 h-[400px] w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute -top-24 right-1/2 translate-x-[40%] sm:translate-x-[20%] lg:translate-x-0 lg:-top-16 lg:right-[45%] w-[180px] h-[180px] z-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/qtI2fhFRt23dMtifGPiYLTjpTs-3.png"
                alt="MATRIXWAYZ Logo"
                width={180}
                height={180}
              />
            </div>
            
            <div className="absolute top-[18%] left-0 w-[250px] h-[250px]">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border">
                <Image
                  src={teamAvatars[0]}
                  alt="Portrait of a smiling man"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-0 right-0 w-[200px] h-[100px]">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border">
                <Image
                  src={teamAvatars[1]}
                  alt="Portrait of a man"
                  fill
                  sizes="200px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-[15%] sm:right-[20%] w-[140px] h-[140px]">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border">
                <Image
                  src={teamAvatars[2]}
                  alt="Portrait of a woman"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;