import {createContext, useState, ReactNode} from 'react'

export interface User {
  id: string
  name: string
  age: number
  country: Countries
}

enum Countries { //exportable
  France = 'France',
  Japon = 'Japon',
  UnitedKingdom = 'United Kingdom',
}

interface UserContextType {
  users: User[] | null
  addUser: (user: User) => void
  updateUser: (id: string, newAge: number) => void
  deleteUser: (id: string) => void
}

const contextInitialValue = {
  users: [{id: '1', name: 'Romain', age: 41, country: Countries.France}],
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
}

const UserContext = createContext<UserContextType>(contextInitialValue)

const UserProvider = ({children}: {children: ReactNode}) => {
  const [users, setUsers] = useState<User[] | null>(null)

  const addUser = (user: User) =>
    setUsers((prevUsers) => (prevUsers ? [...prevUsers, user] : [user]))

  const updateUser = (id: string, newAge: number) => {
    setUsers((prevUsers) =>
      prevUsers
        ? prevUsers.map((user) =>
            user.id === id ? {...user, age: newAge} : user
          )
        : null
    )
  }

  const deleteUser = (id: string) => {
    setUsers((prevUsers) =>
      prevUsers ? prevUsers.filter((user) => user.id !== id) : null
    )
  }

  return (
    <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}
