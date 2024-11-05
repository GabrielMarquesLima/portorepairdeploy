import Header from '@/components/Header/Header';
import BannerServicos from '../../components/Servicos/BannerServicos';
import Footer from '@/components/Footer/Footer';
import CarroList from '@/components/Servicos/CarroList';

export default function Servicos() {
  return (
    <body>
        <Header />
        <main>
            <BannerServicos />
            <CarroList />
        </main>
        <Footer />
    </body>

  );
}
