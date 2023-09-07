import NavHead from '@/components/NavHead/NavHead';
import HeroSection from '@/components/HeroSection/HeroSection';
import EndLine from '@/components/EndLine/EndLine';
import CapsuleWrapper from '@/components/CapsuleWrapper/CapsuleWrapper';
import getCapsules from './libs/getCapsules';
import { Capsule, CapsuleData } from '@/types';

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
      <NavHead />
      <HeroSection />
      <CapsuleWrapper search={true} inputId='capsuleSort' dropdownValues={dropdownValues}
        capsules={capsules} />
      <EndLine bgImage='/images/backgrounds/endLineBlueBG.svg' />
    </>
  )
}

export default Home;