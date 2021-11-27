import axios from "axios"
import { addToken } from "../../utils/jwt"
import { PROFILE_UPDATE, FAVORITE_PET } from "../apiRoutes"


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const patchUserById = async (id, data) => {
    try {
        config.headers.Authorization = addToken()
        const req = await axios.patch(PROFILE_UPDATE + id, data , config )
        //console.log("patch profile ->",req)
        return req.data
    } catch (error) {
        return console.error(error)
    }
}

export const patchFavPetById = async (id,data) => {
    try {
        console.log("bd user id ->",id,"bd pet to fav array ->",data)
        config.headers.Authorization = addToken()
        const req = await axios.patch(FAVORITE_PET + id, data, config )
        console.log("patch fav pet ->",req)
        return req
    } catch (error) {
        return console.error(error)
    }
}
