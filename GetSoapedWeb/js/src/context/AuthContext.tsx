import * as React from "react";
import {useAsync} from 'react-async'
import {bootstrapAppData} from '../utils/BootstrapData'
import * as AuthClient from '../utils/AuthClient'
import {FullPageSpinner} from '../components/Shared/FullPageSpinner'

type AuthContextData = {
    user: object
};

type AuthContextProps = { 
    data: AuthContextData,
    login: Function,
    logout: Function,
    register: Function
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

interface AuthProviderProps {
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [authRequestFinished, setAuthRequestFinished] = React.useState(false);

    const {
        data = {user: null},
        error,
        isRejected,
        isPending,
        isSettled,
        reload,
    } = useAsync(bootstrapAppData);

    React.useEffect(() => {
        if (isSettled) {
            setAuthRequestFinished(true);
        }
    }, [isSettled]);

    if (!authRequestFinished) {
        if (isPending) {
            return <FullPageSpinner />;
        }
        if (isRejected) {
            return (
            <div>
                <p>Uh oh... There's a problem. Try refreshing the app.</p>
                <pre>{error.message}</pre>
            </div>
            );
        }
    }

    const login = (form: any) => AuthClient.login(form.username, form.password).then(reload);
    const register = (form: any) => AuthClient.register(form.username, form.password).then(reload);
    const logout = () => AuthClient.logout().then(reload);

    return (
        <AuthContext.Provider value={{data, login, logout, register}} {...props} />
    )
}

export const useAuth = () : Partial<AuthContextProps> => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}