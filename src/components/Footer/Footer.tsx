import Image from 'next/image';
import logoPorto from '/public/logo-porto2.png';
import logoPortoRepair from '/public/logo-portorepair.png';
import logoPortoRepairIA from '/public/logo-portorepairia.png';

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-100 py-5">
      <nav className="flex justify-around items-center w-full">
        <ul className="flex w-full justify-around items-center space-x-4">
          <li className="flex justify-center items-center h-auto" id="footer-porto">
            <Image src={logoPorto} alt="Logo da Porto" width={129} height={31} />
          </li>
          <li className="flex justify-center items-center h-auto" id="footer-portorepair">
            <Image src={logoPortoRepair} alt="Logo da Porto Repair" width={164} height={31} />
          </li>
          <li className="flex justify-center items-center h-auto" id="footer-portorepairia">
            <Image src={logoPortoRepairIA} alt="Logo Porto Repair IA" width={164} height={31} />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
