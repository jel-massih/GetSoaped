import * as React from "react";
import {AuthProvider} from './AuthContext'
import {UserProvider} from './UserContext'

interface AppProvidersProps {
    children: React.ReactNode
};

export const AppProviders = (props: AppProvidersProps) => {
  return (
    <AuthProvider>
      <UserProvider>{props.children}</UserProvider>
    </AuthProvider>
  )
}