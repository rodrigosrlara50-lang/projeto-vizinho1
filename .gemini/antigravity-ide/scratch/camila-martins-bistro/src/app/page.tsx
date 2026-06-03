import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Reviews from '@/components/Reviews';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Reviews />
      <Menu />
      <Gallery />
      <Footer />
      <FloatingButton />
    </main>
  );
}
