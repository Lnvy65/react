export default function Signup2() {
    return(
        <>
            <form onSubmit={e => {
                e.preventDefault();
                alert('Submitting!');
            }}>
                <input />
                <button>Submit</button>
            </form>
        </>
    )
}