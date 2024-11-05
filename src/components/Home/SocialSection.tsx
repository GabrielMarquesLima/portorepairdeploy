import Image from 'next/image';
import logoPortoRepairBranco from '/public/logo-portorepair-branco.png';
import logoPortoRepairIA from '/public/logo-portorepairia-branco.png';
import iconeWhatsApp from '/public/icone-whatsapp.png';
import iconeInstagram from '/public/icone-instagram.png';
import iconeTwitter from '/public/icone-twitter.png';
import carroRedes from '/public/carro-redes.png';

const RedesSociais = () => {
  return (
    <div className="container-redes flex flex-col items-center bg-blue-800 w-full max-w-5xl rounded-3xl mx-auto gap-14 py-10">
      <div className="parte-cima flex justify-between items-center w-11/12 max-w-2xl mx-auto">
        <Image src={logoPortoRepairBranco} alt="Logo porto repair" width={164} height={30} />
        <h3 className="text-white text-4xl font-montserrat font-normal">
          #Pag<span className="font-semibold">Repair</span>
        </h3>
        <Image src={logoPortoRepairIA} alt="Logo porto repair ia" width={164} height={30} />
      </div>
      <h2 className="text-white text-2xl font-montserrat font-semibold text-center">Nos siga nas redes sociais!</h2>
      <nav>
        <ul className="flex justify-center gap-5">
          <li id="whatsapp">
            <a href="https://chat.whatsapp.com/IhIdJjEexc039myKNNe4H9" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center text-white">
              <Image src={iconeWhatsApp} alt="Ícone da rede social WhatsApp" width={35} height={35} />
              <p>WhatsApp</p>
            </a>
          </li>
          <li id="instagram">
            <a href="/em-breve" className="social-link flex flex-col items-center text-white">
              <Image src={iconeInstagram} alt="Ícone da rede social Instagram" width={35} height={35} />
              <p>Instagram</p>
            </a>
          </li>
          <li id="twitter">
            <a href="/em-breve" className="social-link flex flex-col items-center text-white">
              <Image src={iconeTwitter} alt="Ícone da rede social Twitter" width={35} height={35} />
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </nav>
      <picture>
        <Image src={carroRedes} alt="Imagem de um carro visto de cima." width={544} height={300} className="rounded-2xl mx-auto" />
      </picture>
    </div>
  );
};

export default RedesSociais;
