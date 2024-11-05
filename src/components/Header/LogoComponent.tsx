import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo-portorepair.png';

export default function LogoComponent() {
  return (
    <div className="flex flex-1 justify-start ml-5">
      <Link href="/index" className="flex items-center justify-center">
        <Image
          src={logo}
          alt="Logo Porto Repair"
          width={250}
          height={39}
          className="object-contain"
        />
      </Link>
    </div>
  );
}
