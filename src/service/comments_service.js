import { constants} from "../constants";

export const comments_service = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
}