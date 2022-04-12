import { constants} from "../constants";

export const posts_service = {
    getAllPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())
}