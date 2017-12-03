import { UserContext } from './user-context';

export class AuthResponse {
    valid: Boolean;
    isTemporary: Boolean;
    context: UserContext;
}