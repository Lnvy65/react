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