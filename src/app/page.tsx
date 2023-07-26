import Link from 'next/link';
import React from 'react'
import styles from "./home.module.css";
import { prisma } from '@/db';
import TodoItem from '@/components/TodoItem/TodoItem';
import NavHead from '@/components/NavHead/NavHead';

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
      <NavHead></NavHead> 
    </>
  )
}

export default Home;