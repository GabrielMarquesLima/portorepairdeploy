import Image from 'next/image';
import bannerImage from '/public/banner-pagina-inicial.png';

export default function Banner() {
  return (
    <div className="bg-gray-100 py-24 w-full flex flex-col items-center gap-5 text-center md:py-12">
      <div className="w-1/2 flex flex-col gap-5 items-center md:w-4/5">
        <h1 className="text-black font-montserrat text-4xl font-medium leading-normal md:text-3xl sm:text-2xl">
          Soluções para o seu carro na palma da sua mão
        </h1>
        <p className="text-black text-xl font-medium leading-normal">
          Com poucos cliques você <span className="text-blue-600">economiza horas</span> do seu dia!
        </p>
      </div>
      <div className="w-[480px] md:w-4/5 flex justify-center">
        <Image 
          src={bannerImage} 
          alt="Imagem de um homem dentro do seu carro segurando seu celular." 
          className="w-150 h-auto" 
        />
      </div>
    </div>
  );
}
