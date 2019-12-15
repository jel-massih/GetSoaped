import { UserManager, WebStorageStateStore, User } from 'oidc-client';

import { AuthPaths, ApplicationName } from '../Constants';

export class AuthService {
    private userManager: UserManager = null;
    private user: User = null;
    private isAuthenticated: boolean = false;

    private ensureUserManagerInitialized = async () => {
        if(this.userManager !== null) {
            return;
        }

        const response = await fetch(AuthPaths.ApiAuthorizationClientConfigurationUrl);
        if(!response.ok) {
            throw new Error(`Could not load settings for '${ApplicationName}'`);
        }

        let settings = await response.json();
        settings.automaticSilentRenew = true;
        settings.includeIdTokenInSilentRenew = true;
        settings.userStore = new WebStorageStateStore({
            prefix: ApplicationName
        });

        this.userManager = new UserManager(settings);

        this.userManager.events.addUserSignedOut(async () => {
            await this.userManager.removeUser();
            this.updateState(undefined);
        });
    }

    updateState(user: any) {
        this.user = user;
        this.isAuthenticated = !!this._user;
        this.notifySubscribers();
    }
}


