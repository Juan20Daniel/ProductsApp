import { tesloApi } from "../../config/api/tesloApi";
import type { User } from "../../domain/entities/user";
import type { AuthResponseAPI } from "../../infrastructure/interfaces/auth.responses";

const userToken = (data:AuthResponseAPI) => {
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
        return userToken(data);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const authCheckStatus = async () => {
    try {
        const {data} = await tesloApi.get<AuthResponseAPI>('/auth/check-status');
        return userToken(data);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const authRegister = async (fullName:string, email:string, password:string) => {
    try {
        const { data } = await tesloApi.post<AuthResponseAPI>('/auth/register',{
            fullName,
            email,
            password
        });
        return userToken(data);
    } catch (error) {
        console.log(error);
        throw new Error("Error al crear el usuario.");
    }
}