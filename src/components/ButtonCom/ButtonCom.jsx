import style from "./ButtonCom.module.css"

export default function ButtonCom() {
  return (
    <>
        <h1 className={style.title}>My App</h1>
        <nav className={style.navBar}>
            <button className={style.myButton}>Click Me</button>
            <button >Click Me</button>
        </nav>
    </>
  )
}