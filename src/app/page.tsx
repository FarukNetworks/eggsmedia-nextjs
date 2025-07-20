import HeroSection from './components/Home/HeroSection/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection
        heading="Balancing Creativity and Strategy"
        editor="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        gifUrl="https://eggsmedia.com/wp-content/uploads/2025/03/Eggs-Website-GIF.gif"
        imageUrl="https://eggsmedia.com/wp-content/uploads/2024/11/eggsmedia-hero-image.png"
        imageAlt="Hero Section Image"
        imageWidth={1000}
        imageHeight={1000}
      />
    </main>
  );
}
