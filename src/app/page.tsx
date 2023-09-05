import NavHead from '@/components/NavHead/NavHead';
import HeroSection from '@/components/HeroSection/HeroSection';
import InputSection from '@/components/InputSection/InputSection';
import CardSection from '@/components/CapsuleCardSection/CapsuleCardSection';
import EndLine from '@/components/EndLine/EndLine';

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
      <div className="capsuleSectionContainer">
        <InputSection search={true} id="capsuleSort" dropdownValues={dropdownValues} />
        <CardSection />
      </div>
      <EndLine bgImage='/images/backgrounds/endLineBlueBG.svg' />
    </>
  )
}

export default Home;