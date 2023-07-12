import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';

const createTodo = async (data: FormData) => {
  /*Sendet im Endeffekt einfach einen Fetch-Request, 
    kümmert sich aber bereits um Loading, Errors und Co. 
    Außerdem ist der Code auf dem Server und nicht auf dem Client! Mega. Kann bestimmt auch gut für API-Anfragen genutzt werden!*/
  "use server"

  const title = data.get("title")?.valueOf();

  if(typeof title !== "string" || title.length === 0){
    throw new Error("Invalid title");
  }

  await prisma.todo.create({data: {title, complete: false}});
  redirect("/");
}

function Page() {
  return (
    <>
      <header className={styles.header}>
        <h1>New</h1>
      </header>
      <form action={createTodo} className={styles.form}>
        <input type="text" name="title" />
        <div className={styles.buttonContainer}>
          <Link href=".." className={styles.link}>Cancel</Link>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  )
}

export default Page