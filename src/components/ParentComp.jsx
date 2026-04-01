import reactLogo from "../assets/react.svg"
import viteLogo from "../assets/vite.svg"
import ChildComp from "./ChildComp"

export default function ParentComp(){
    return(
        <>
            <ChildComp
                imageInfo={
                    {
                        src: reactLogo,
                        alt: "React1",
                    }
                }
            />
            <ChildComp
                imageInfo={
                    {
                        src: reactLogo,
                        alt: "React1",
                    }
                } 
                width={100}
                height={100}
            />
            <ChildComp
                imageInfo={
                    {
                        src: viteLogo,
                        alt: "React",
                    }
                } 
                width={200}
                height={200}
            />
        </>
    )
}