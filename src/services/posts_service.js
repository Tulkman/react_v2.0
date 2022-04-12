import {axiosService} from "./axios_service";
import {urls} from "../constants";


export const postsService = {
    getPostsByUserId: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`)
}