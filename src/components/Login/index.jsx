import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../../API'
import { Context } from '../../context'
import Button from '../Button'
import { Wrapper } from './Login.styles'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const [_user, setUser] = useContext(Context)
  const navigate = useNavigate()

  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value

    if (name === 'username') setUsername(value)
    if (name === 'password') setPassword(value)
  }

  async function handleSubmit() {
    setError(false)
    try {
      const requestToken = await API.getRequestToken()
      const sessionId = await API.authenticate(requestToken, username, password)

      setUser({ sessionId: sessionId.session_id, username })
      navigate('/')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Wrapper>
      {error && <div className="error">Oops! Something went wrong...</div>}
      <label>Username: </label>
      <input type="text" value={username} name="username" onChange={handleInput} />
      <label>Password: </label>
      <input type="password" value={password} name="password" onChange={handleInput} />
      <Button text="login" callback={handleSubmit} />
    </Wrapper>
  )
}
