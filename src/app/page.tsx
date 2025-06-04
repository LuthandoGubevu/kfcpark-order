import Header from '@/components/header';
import HeroCarousel from '@/components/hero-carousel';
import ImageGrid from '@/components/image-grid';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ImageGrid />
      </main>
    </div>
  );
}
