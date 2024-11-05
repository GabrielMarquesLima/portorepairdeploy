import Image, { StaticImageData } from 'next/image';

interface ServicesCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

export default function CardServices({
  imageSrc,
  title,
  description,
  link,
  buttonText,
}: ServicesCardProps) {
  return (
    <div className="flex justify-center gap-6 w-full p-4 bg-white rounded shadow-lg">
      <picture>
        <Image src={imageSrc} alt={`Imagem representando ${title}`} width={450} height={300} />
      </picture>
      <div className="flex flex-col items-center justify-around w-[60%] text-center">
        <h3 className="text-black font-questrial text-[35px]">{title}</h3>
        <p className="text-black font-montserrat text-[25px]">{description}</p>
        <a href={link} className="w-[50%]">
          <p className="bg-blue-600 text-white font-questrial text-[32px] p-2 rounded transition-all hover:scale-105 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
            {buttonText}
          </p>
        </a>
      </div>
    </div>
  );
}
