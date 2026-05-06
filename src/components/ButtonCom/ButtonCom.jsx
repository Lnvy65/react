{/*
import style from "./ButtonCom.module.css"

export default function ButtonCom() {

    const handleClick = () => {
        alert("버튼 클릭")
    }

  return (
    <>
        <h1 className={style.title}>My App</h1>
        <nav className={style.navBar}>
            <button className={style.myButton} onClick={handleClick}>Click Me</button>
            <button className={style.myButton} onClick={handleClick}>Click Me</button>
        </nav>
    </>
  )
}
*/}

{/*
export default function ButtonCom({ message, children }) {

    const handleClick = () => {
        alert(message)
    }

  return (
    <>
        <button onClick={handleClick}>
            {children}
        </button>
    </>
  )
}*/}

export default function ButtonCom({ message, handle, children, style }) {
  return (
    <>
        <button onClick={ () => handle({ message })} className={style}>
            {children}
        </button>
    </>
  )
}