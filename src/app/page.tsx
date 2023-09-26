import PageWrapper from '@/app/PageWrapper/PageWrapper';
import HeroSection from '@/components/HeroSection/HeroSection';
import CapsuleWrapper from '@/components/CapsuleWrapper/CapsuleWrapper';
import getCapsules from './libs/getCapsules';
import updateData from '@/firebase/firestore/updateData';
import getExchangeRatesEUR from './libs/getExchangeRatesEUR';
import { useEffect } from 'react';

const dropdownValues = [
  "Capsule Price ASC",
  "Capsule Price DESC",
  "Name ASC",
  "Name DESC",
  "Sticker Value ASC",
  "Sticker Value DESC",
  "SV/P Ratio ASC",
  "SV/P Ratio DESC"
]

async function Home() {
  const capsules = await getCapsules();
  const exchangeRates = await getExchangeRatesEUR();

  const updateDataFB = async () => {
    const currentTimeStampHours = new Date().getTime() / 1000 / 3600;
    for (const capsule of capsules) {
      const lastUpdatedTimestampHours = capsule.last_updated / 1000 / 3600;
      const timeStampHoursDiff = currentTimeStampHours - lastUpdatedTimestampHours;

      if (timeStampHoursDiff > 8) {
        capsule.last_updated = new Date().getTime();
        await updateData("capsules", capsule.name, capsule);
      }
    };
  }

  updateDataFB();

  return (
    <>
      <PageWrapper accentColor="var(--blue)" endLineBgImg="/images/backgrounds/endLineBlueBG.svg">
        <HeroSection />
        <CapsuleWrapper search={true} inputId='capsuleSort' dropdownValues={dropdownValues}
          capsules={capsules} exchangeRates={exchangeRates}/>
      </PageWrapper>
    </>
  )
}

export default Home;