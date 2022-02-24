import { User } from "src/app/modules/user.module";

export interface AuthState {
    user: User | null;
}

export const initialState: AuthState = {
    user: null
};
