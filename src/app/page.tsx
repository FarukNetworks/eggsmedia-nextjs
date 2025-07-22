import HeroSection from './components/Home/HeroSection/HeroSection';

interface HeroSectionData {
  heading: string;
  editor: string;
  gifUrl: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

interface WordPressImageData {
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
}

interface WordPressPageContent {
  heading: string;
  editor: string;
  image: string;
}

export default async function Home() {
  const fetchImageData = async (
    imageId: string
  ): Promise<WordPressImageData> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${imageId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch image data: ${response.status}`);
    }

    return response.json();
  };

  const fetchWordPressData = async (): Promise<HeroSectionData | null> => {
    try {
      // Fetch page data
      const pageResponse = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/pages?slug=homepage`
      );

      if (!pageResponse.ok) {
        throw new Error(`Failed to fetch page data: ${pageResponse.status}`);
      }

      const pageData = await pageResponse.json();
      const homepageContent: WordPressPageContent =
        pageData[0]?.acf?.['homepage-content']?.[0];

      if (!homepageContent) {
        throw new Error('Homepage content not found');
      }

      // Fetch image data
      const imageData = await fetchImageData(homepageContent.image);

      // Build hero section data
      const heroData: HeroSectionData = {
        heading: homepageContent.heading,
        editor: homepageContent.editor,
        gifUrl:
          'https://eggsmedia.com/wp-content/uploads/2025/03/Eggs-Website-GIF.gif',
        imageUrl: imageData.source_url,
        imageAlt: imageData.alt_text,
        imageWidth: imageData.media_details.width,
        imageHeight: imageData.media_details.height,
      };

      return heroData;
    } catch (err) {
      console.error('Error fetching WordPress data:', err);
      return null;
    }
  };

  // Fetch data on the server
  const heroSectionData = await fetchWordPressData();

  // Provide fallback data if WordPress fetch fails
  const defaultHeroData: HeroSectionData = {
    heading: 'Welcome to Eggs Media',
    editor: 'We create amazing digital experiences',
    gifUrl:
      'https://eggsmedia.com/wp-content/uploads/2025/03/Eggs-Website-GIF.gif',
    imageUrl: '',
    imageAlt: 'Eggs Media',
    imageWidth: 800,
    imageHeight: 600,
  };

  const finalHeroData = heroSectionData || defaultHeroData;

  return (
    <main>
      <HeroSection
        heading={finalHeroData.heading}
        editor={finalHeroData.editor}
        gifUrl={finalHeroData.gifUrl}
        imageUrl={finalHeroData.imageUrl}
        imageAlt={finalHeroData.imageAlt}
        imageWidth={finalHeroData.imageWidth}
        imageHeight={finalHeroData.imageHeight}
      />
    </main>
  );
}
