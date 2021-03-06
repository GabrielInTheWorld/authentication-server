import { AuthenticationCredential } from '../lib/core/models/authentication-credential';
import { AuthenticationType } from '../lib/core/models/authentication-types';
import { IUser } from '../lib/core/models/user';

export interface AuthenticatorProvider {
  register(user: IUser, values: AuthenticationCredential): IUser;
  login(user: IUser, values: AuthenticationCredential): void;
  getAvailableAuthenticators(): AuthenticationType[];
}
