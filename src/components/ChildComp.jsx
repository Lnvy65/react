export default function ChildComp({imageInfo, width="500", height="500"}) {
    return(
        <>
            <img className="button-icon" src={imageInfo.src} alt={imageInfo.alt} width={width} height={height} />
        </>
    )
}