import * as React from "react";
import {AuthProvider} from './AuthContext'
import {UserProvider} from './UserContext'

export const AppProviders = (children: any) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}