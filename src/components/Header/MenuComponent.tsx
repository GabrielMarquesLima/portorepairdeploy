"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menuHamburguerIcon from '/public/menu-hamburguer.png';
import homeIcon from '/public/casa-icone.png';

export default function MenuComponent() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="cursor-pointer flex justify-center" onClick={toggleMenu}>
        <Image src={menuHamburguerIcon} alt="Menu Hamburguer" width={45} height={45} />
      </div>

      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-16 bg-blue-700 rounded-lg w-48 flex-col items-center p-4`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/" className="flex items-center text-white hover:text-blue-200 transition">
              <Image src={homeIcon} alt="Ícone de casa" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/Servicos" className="text-white text-lg font-medium font-montserrat hover:text-blue-200 transition">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/Sobre" className="text-white text-lg font-medium font-montserrat hover:text-blue-200 transition">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
