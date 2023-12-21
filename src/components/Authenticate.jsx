function Authenticate ({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick () {
        try {
            //
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{ successMessage }</p>}
            {error && <p>{ error }</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    )
}

export default Authenticate;