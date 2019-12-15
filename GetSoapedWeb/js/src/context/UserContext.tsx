import * as React from "react";
import {useAuth} from './AuthContext'


type UserContextProps = { 
    user: object,
};

const UserContext = React.createContext<Partial<UserContextProps>>({});

interface UserProviderProps {
}

export const UserProvider = (props: UserProviderProps) => {
  const authData = useAuth();
  return <UserContext.Provider value={authData.data.user} {...props} />
}

export const useUser = () : Partial<UserContextProps> => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}