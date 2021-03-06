import { AuthenticationCredential } from './authentication-credential';
import { AuthenticationType } from './authentication-types';

export interface IUser extends AuthenticationCredential {
  username: string;
  userId: string;

  /**
   * Property to determine, with which types a user wants to authenticate.
   */
  authenticationTypes: AuthenticationType[];
}
