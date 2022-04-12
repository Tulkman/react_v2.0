import { constants} from "../constants";

export const users_service = {
    getAllUsers: () => fetch(constants.apiUrl + 'users').then(value => value.json())
}