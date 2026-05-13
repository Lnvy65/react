import style from "../css/Bubble.module.css"

function Button({ onClick, children }) {
    return(
        <button className={style.button} onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    )
}

export default function Bubble() {
    return(
        <>
            <h1 className={style.title}>Bubble</h1>
            <nav className={style.navBar} onClick={() => alert("네비게이션바 클릭!")}>
                <Button className={style.button} onClick={() => alert("버튼1 클릭!")}>버튼1</Button>&nbsp;
                <Button className={style.button} onClick={() => alert("버튼2 클릭!")}>버튼2</Button>
            </nav>
        </>
    )
}