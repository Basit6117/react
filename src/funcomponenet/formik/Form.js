import React from 'react'
import { useState } from 'react'

const Form = () => {
const [username, setUserename] = useState("")
const [password, setPassword] = useState("")
    return (
        <div>
            <form>
                <input type="text"
                    name='username'
                    id='username'
                    value={username }
                    onChange={e =>setUserename (e.target.value)}
                />
                <input type='password'
                name='passsword'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Form
