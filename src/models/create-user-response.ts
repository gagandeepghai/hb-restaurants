import { UserContext } from './user-context';

export class CreateUserResponse {
    valid: Boolean;
    message: string;
    context: UserContext;
}