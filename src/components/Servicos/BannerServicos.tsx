import Image from 'next/image';
import carroImage from '/public/carro-servicos.png';

export default function BannerServicos() {
  return (
    <div className="flex flex-col w-full container-banner-servicos">
      <div className="flex flex-col gap-10 py-8 bg-[#EFF4EF] banner">
        <div className="flex flex-col gap-5 w-4/5 ml-5 md:w-3/4 lg:w-2/3 textos">
          <h1 className="text-black font-montserrat text-4xl font-medium">
            Solucione o seu problema em um piscar de olhos!
          </h1>
          <p className="text-black text-lg font-medium">
            Com poucos cliques você <span className="text-[#2662C8]">economiza horas</span> do seu dia!
          </p>
        </div>
      </div>
      <div className="flex justify-end w-full mt-[-100px] carro">
        <Image
          src={carroImage}
          alt="Imagem de um carro branco"
          width={520}
          height={432}
          className="w-[520px] h-auto"
        />
      </div>
    </div>
  );
}
