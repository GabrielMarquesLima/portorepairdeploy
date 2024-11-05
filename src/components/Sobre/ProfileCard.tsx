import Image from 'next/image';

interface ProfileCardProps {
  imageSrc: any;
  altText: string;
  description: string;
  linkedinUrl: string;
  githubUrl: string;
  whatsappUrl: string;
}

export default function ProfileCard({
  imageSrc,
  altText,
  description
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center md:flex-row gap-8">
      <div className="flex justify-center items-center">
        <Image src={imageSrc} alt={altText} width={300} height={300} className="rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg">
        <p className="text-lg font-medium text-black">
          {description}
        </p>
      </div>
    </div>
  );
}
