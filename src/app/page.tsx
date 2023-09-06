import NavHead from '@/components/NavHead/NavHead';
import HeroSection from '@/components/HeroSection/HeroSection';
import EndLine from '@/components/EndLine/EndLine';
import CapsuleWrapper from '@/components/CapsuleWrapper/CapsuleWrapper';

const dropdownValues = [
  "Capsule Price ASC",
  "Capsule Price DESC",
  "Name ASC",
  "Name DESC",
  "Sticker Value ASC",
  "Sticker Value DESC"
]

function Home() {

  return (
    <>
      <NavHead />
      <HeroSection />
      <CapsuleWrapper search={true} inputId='capsuleSort' dropdownValues={dropdownValues} />
      <EndLine bgImage='/images/backgrounds/endLineBlueBG.svg' />
    </>
  )
}

export default Home;