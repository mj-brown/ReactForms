import { useState } from 'react'

function SignUpForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({ 
                username: "some-username", 
                password: "super-secret-999" 
              }) 
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{ error }</p>}
            <form onSubmit={(handleSubmit)}>
                <label><br />
                    Username: <input value={ username } onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label><br />
                    Password: <input value={ password } onChange={(e) => setPassword(e.target.value)} />
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;