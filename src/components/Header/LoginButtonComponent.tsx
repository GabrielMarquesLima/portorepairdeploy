import Link from 'next/link';
import Image from 'next/image';
import portoLogo from '/public/logo-porto.png';

export default function LoginButtonComponent() {
  return (
    <div className="flex flex-1 items-center justify-end">
      <Link href="/Servicos">
        <div className="flex items-center justify-around w-[240px] h-[60px] mr-2 rounded-lg bg-blue-700 transition-transform duration-200 hover:scale-105 hover:bg-white hover:border hover:border-blue-700 hover:shadow-lg">
          <picture className="w-[50px] h-[50px] flex items-center justify-center">
            <Image src={portoLogo} alt="Logo Porto Seguro" width={50} height={50} />
          </picture>
          <p className="text-white font-inriaSans text-lg font-normal leading-none hover:text-blue-700">
            Fazer orçamento
          </p>
        </div>
      </Link>
    </div>
  );
}
