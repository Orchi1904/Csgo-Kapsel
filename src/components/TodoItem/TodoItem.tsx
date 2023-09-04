"use client" 

import styles from "./TodoItem.module.css";

type TodoItemProps = {
    id: string,
    title: string, 
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void,
}

function TodoItem({id, title, complete, toggleTodo}: TodoItemProps) {
  return (
    <li className={styles.itemContainer}>
        <input id={id} type="checkbox" className={styles.checkbox}
               defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
        <label htmlFor={id} className={styles.label}>{title}</label>
    </li>
  )
}

export default TodoItem