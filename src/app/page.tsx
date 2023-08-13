import { prisma } from '@/db';
import NavHead from '@/components/NavHead/NavHead';
import HeroSection from '@/components/HeroSection/HeroSection';
import InputSection from '@/components/InputSection/InputSection';
import CardSection from '@/components/CapsuleCardSection/CapsuleCardSection';
import EndLine from '@/components/EndLine/EndLine';

const getTodos = () => {
  //Server Component Data fetching
  return prisma.todo.findMany();
}

const toggleTodo = async (id: string, complete: boolean) => {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } });
}

async function Home() {
  const todos = await getTodos();

  return (
    <>
      <NavHead/>
      <HeroSection/>
      <InputSection search={true} id="capsuleSort"/>
      <CardSection/>
      <EndLine bgImage='/images/backgrounds/endLineBG.svg'/>
    </>
  )
}

export default Home;