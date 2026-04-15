export default function ChildComp({imageInfo, width, height}) {
    return(
        <>
            <img className="button-icon" src={imageInfo.src} alt={imageInfo.alt} width={width} height={height} />
        </>
    )
}