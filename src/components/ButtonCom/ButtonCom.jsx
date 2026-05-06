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

export default function ButtonCom({ message, handle, children }) {
  return (
    <>
        <button onClick={ () => handle({ message })}>
            {children}
        </button>
    </>
  )
}