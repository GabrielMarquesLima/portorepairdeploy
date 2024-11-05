import CardServices from './CardServices';

import orcamentoImage from '/public/banner-servicos-orcamento.png';
import agendamentoImage from '/public/banner-servicos-agendamento.png';
import portoRepairImage from '/public/banner-servicos-portorepair.png';

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center bg-gray-100 gap-[110px] py-24">
      <CardServices
        imageSrc={orcamentoImage}
        title="Orçamento Online"
        description="Faça um orçamento certeiro online, realizado de forma automática em poucos minutos utilizando a nossa nova tecnologia SeguroRepair, a nossa Inteligência Artificial que irá fazer o seu orçamento e entregar o preço total."
        link="/Servicos"
        buttonText="Fazer Orçamento Online"
      />
      <CardServices 
        imageSrc={agendamentoImage}
        title="Agendamento de serviços"
        description="Faça o seu agendamento para as manutenções necessárias na unidade mais próxima!"
        link="/Servicos"
        buttonText="Fazer Agendamento"
      />
      <CardServices
        imageSrc={portoRepairImage}
        title="PortoRepair"
        description="Faça um orçamento certeiro online, realizado de forma automática em poucos minutos utilizando a nossa nova tecnologia SeguroRepair, a nossa Inteligência Artificial."
        link="/Servicos"
        buttonText="Acessar PortoRepair"
      />
    </div>
  );
}
