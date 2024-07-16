import './App.css'
import UserInfo from './User'
import {UserProvider} from './UserContexProvider'

import {useContext, useState} from 'react'
import {UserContext} from './UserContexProvider'

function App() {
  let x = 2 //type inference, no need to typing needed if assignement
  x = 42
  console.log(x)

  const [inputText, setInputText] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInputText(e.target.value)
  //const handleSubmit =(e: React.FormEvent<HTMLFormElement>) =>{}
  //const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const {users, updateUser, addUser, deleteUser} = useContext(UserContext)
  return (
    <UserProvider>
      {users?.map((user) => (
        <UserInfo
          id={user.id}
          name={user.name}
          age={user.age}
          country={user.country}
        />
      ))}
      <p>Input text : {inputText}</p>
      <input onChange={handleChange} />
    </UserProvider>
  )
}

export default App
