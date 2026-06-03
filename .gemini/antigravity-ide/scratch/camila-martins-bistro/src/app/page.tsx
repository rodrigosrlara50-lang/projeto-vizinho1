import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Reviews from '@/components/Reviews';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Reviews />
      <Menu />
      <Footer />
      <FloatingButton />
    </main>
  );
}
