export default function Items({name, isPacked}) {
    let itemContent = name;
    if(isPacked) {
        itemContent = <del>{itemContent + ' ✔'}</del>;
    }

    return(
        <>
            {/* <li>{name} {isPacked?  ' ✔' : ""}</li> */}
            {/* <li>
                {
                    isPacked ?
                    <del>
                        {name + ' ✔'}
                    </del>
                    :
                    name
                }
            </li> */}
            <li>{itemContent}</li>
        </>
    );
}