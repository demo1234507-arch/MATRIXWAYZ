import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Daniel Foster", role: "CEO", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/zLsRpzTOydN0lZDv0Y9nOnXUhE-24.jpeg" },
  { name: "Ethan Walker", role: "Sales", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/ydtQD6o8DeCWexskC8hHuHy7Hw-25.jpeg" },
  { name: "Liam Parker", role: "Developer", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/h9xoEp2mX33JoYcvY55CzVQUH3I-26.jpeg" },
  { name: "Emily Carter", role: "CCO", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/nffLIvtTcBfyOLOMKVAzgtDyYE-27.jpeg" },
  { name: "Sophia Scott", role: "Marketing", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/vjaXWHQrllvh8eUdAQi5T87EFk-28.jpeg" },
  { name: "Lucas Gray", role: "Developer", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/C65XyaJM6wTUx5oSpMHtOjiH2o-29.jpeg" },
  { name: "Michael Thornton", role: "CTO", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/zLsRpzTOydN0lZDv0Y9nOnXUhE-24.jpeg" },
  { name: "Olivia Hayes", role: "Design", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/ydtQD6o8DeCWexskC8hHuHy7Hw-25.jpeg" },
  { name: "Ryan Cooper", role: "Developer", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/h9xoEp2mX33JoYcvY55CzVQUH3I-26.jpeg" }
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-background py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-[8px] border border-primary bg-accent px-4 py-2">
            <p className="text-sm font-medium text-accent-foreground">Team</p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-text-primary sm:text-4xl lg:text-5xl">
            Meet the team
          </h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <div className="relative h-32 w-32">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text-primary">{member.name}</h3>
              <div className="mt-2">
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;