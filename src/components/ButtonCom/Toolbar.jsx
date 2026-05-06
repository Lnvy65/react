import {handleClick} from "./handle"
import ButtonCom from "./ButtonCom"

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

export default function Toolbar() {
    return(
        <>
            <ButtonCom message="버튼1 클릭" handle={handleClick}>
                버튼1
            </ButtonCom>
            <ButtonCom message="버튼2 클릭" handle={handleClick}>
                버튼2
            </ButtonCom>
        </>
    )
}