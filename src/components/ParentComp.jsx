import reactLogo from "../assets/react.svg"
import ChildComp from "./ChildComp"

export default function ParentComp(){
    return(
        <>
            <ChildComp
                imageInfo={
                    {
                        src: reactLogo,
                        alt: "React",
                    }
                } 
                width={100}
                height={100}
            />
        </>
    )
}