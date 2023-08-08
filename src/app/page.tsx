import { prisma } from '@/db';
import NavHead from '@/components/NavHead/NavHead';
import HeroSection from '@/components/HeroSection/HeroSection';
import InputSection from '@/components/InputSection/InputSection';
import CardSection from '@/components/CardSection/CardSection';

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
      <InputSection/>
      <CardSection/>
    </>
  )
}

export default Home;