import PageWrapper from '@/components/PageWrapper/PageWrapper';
import HeroSection from '@/components/HeroSection/HeroSection';
import CapsuleWrapper from '@/components/CapsuleWrapper/CapsuleWrapper';
import getCapsules from './libs/getCapsules';

const dropdownValues = [
  "Capsule Price ASC",
  "Capsule Price DESC",
  "Name ASC",
  "Name DESC",
  "Sticker Value ASC",
  "Sticker Value DESC"
]

async function Home() {
  const capsules = await getCapsules();

  return (
    <>
      <PageWrapper accentColor="var(--blue)" endLineBgImg="/images/backgrounds/endLineBlueBG.svg">
        <HeroSection />
        <CapsuleWrapper search={true} inputId='capsuleSort' dropdownValues={dropdownValues}
          capsules={capsules} />
      </PageWrapper>
    </>
  )
}

export default Home;