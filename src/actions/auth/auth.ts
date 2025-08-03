import { tesloApi } from "../../config/api/tesloApi";
import { User } from "../../domain/entities/user";
import type { AuthResponseAPI } from "../../infrastructure/interfaces/auth.responses";

const returnUserToken = (data:AuthResponseAPI) => {
    const user:User = {
        id:data.id,
        fullName: data.fullName,
        email: data.email,
        isActive: data.isActive,
        roles: data.roles
    }
    return {
        user:user,
        token:data.token
    }
}

export const authLogin = async (email:string, password:string) => {
    email = email.toLowerCase();
    try {
        const { data } = await tesloApi.post<AuthResponseAPI>('/auth/login', {
            email,
            password
        });
        console.log('exce')
        return returnUserToken(data);
    } catch (error) {
        console.log(error);
        return null;
    }
}