import { createContext, useState } from "react";


export const UserContext = createContext({})

export const UserProvider = props => {
  const [userData, setUserdata] = useState('')
  const [userRepos, setUserRepos] = useState('')

  return (
    <UserContext.Provider value={{
      userData,
      setUserdata,
      userRepos,
      setUserRepos
    }}>
      {props.children}
    </UserContext.Provider>
  )
}