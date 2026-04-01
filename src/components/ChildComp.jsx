import ReactLogo from "../assets/react.svg"

export default function ChildComp({alt, width, height}) {
    return(
        <>
            <img className="button-icon" src={ReactLogo} alt={alt} width={width} height={height} />
        </>
    )
}