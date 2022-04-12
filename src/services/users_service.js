import {axiosService} from "./axios_service";
import {urls} from "../constants";

export const usersService = {
    getAllUsers:() => axiosService.get(urls.users).then(value => value.data)
}