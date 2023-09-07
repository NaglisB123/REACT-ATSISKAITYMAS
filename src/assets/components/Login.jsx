import { useState } from 'react'

export default function Login() {
    const [emailValue, setEmailValue] = useStateate([])
    const [passwordValue, setPasswordValue] = useState([])

function handelSubmit(event) {
    event.preventDefault();
}
  return (
    <div>Login</div>
  )
}
