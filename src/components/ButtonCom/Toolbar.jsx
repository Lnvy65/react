import {handleClick, handlePlay, handleStop} from "./handle"
import ButtonCom from "./ButtonCom"
import style from "../../css/ButtonCom.module.css"
import sampleVideo from "../../assets/348057_medium.mp4"

{/*
export default function Toolbar() {
    return(
        <>
            <ButtonCom message="버튼1 클릭">
                버튼1
            </ButtonCom>
            <ButtonCom message="버튼2 클릭">
                버튼2
            </ButtonCom>
        </>
    )
}
*/}

{/*
export default function Toolbar() {
    return(
        <>
            <ButtonCom message="버튼1 클릭" handle={handleClick} style={style.myButton}>
                버튼1
            </ButtonCom>
            <ButtonCom message="버튼2 클릭" handle={handleClick} style={style.myButton}>
                버튼2
            </ButtonCom>
        </>
    )
}
*/}

export default function Toolbar() {
    return(
        <>
            <nav>
                <ButtonCom message="videoPlayer" handle={handlePlay} style={style.myButton} >
                    Play
                </ButtonCom>
                <ButtonCom message="videoPlayer" handle={handleStop} style={style.myButton} >
                    Stop
                </ButtonCom>
            </nav>
            <br />
            <section>
                <video id="videoPlayer" src={sampleVideo} controls width="350" />
            </section>
        </>
    )
}