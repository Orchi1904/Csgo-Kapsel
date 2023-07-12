import Link from 'next/link';
import React from 'react'
import styles from "./home.module.css";
import { prisma } from '@/db';
import TodoItem from '@/components/TodoItem';

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
      <header className={styles.header}>
        <h1>Todos</h1>
        <Link href="new" className={styles.link}>New todo</Link>
      </header>
      <ul className={styles.todoListContainer}>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}

export default Home;