import { useState } from "react"
import { register } from "./firebase"

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault()
    const user = await register(email, password)
    console.log(user)
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input type="e-mail" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button disabled={!email || !password} type="submit">Register</button>
      </form>
    </>
  )
}

export default App
