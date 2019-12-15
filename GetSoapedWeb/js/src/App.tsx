import * as React from "react";

import {useUser} from './context/UserContext';
import {FullPageSpinner} from './components/Shared/FullPageSpinner';

const loadAuthenticatedApp = () => import('./AuthenticatedApp');
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
const UnauthenticatedApp = React.lazy(() => import('./UnAuthenticatedApp'));

export const App = () => {
    const user = useUser();

    //Unauthenticated users will still load authenticated app async
    React.useEffect(() => {
        loadAuthenticatedApp();
    }, []);

    return (
        <React.Suspense fallback={<FullPageSpinner />}>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </React.Suspense>
    );
};