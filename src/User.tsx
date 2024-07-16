import {useState} from 'react'
import {User} from './UserContexProvider'

const UserInfo = ({name, age, id, country}: User) => {
  const [showInfo, setShowInfo] = useState<boolean | null>(null)

  const toggleInfo = (): void => {
    setShowInfo((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={toggleInfo}>Toggle {id}</button>
      {showInfo && (
        <p>
          Hello, I'm {name}, from {country}, and I'm {age} years old
        </p>
      )}
    </>
  )
}

export default UserInfo
