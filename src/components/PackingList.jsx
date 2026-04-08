import Items from "./Items";

export default function PackingList() {
    return(
        <>
            <section>
                <h1>여행 준비 목록</h1>
                <ul>
                    <Items name="여권" isPacked={true} />
                    <Items name="비행기 티켓" />
                    <Items name="수영복" />
                    <Items name="선크림" />
                </ul>
            </section>
        </>
    );
}