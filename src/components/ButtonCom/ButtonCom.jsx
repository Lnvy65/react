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
}