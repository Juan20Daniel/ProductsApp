import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageAdapter {
    static async getItem(key:string): Promise<string|null> {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    static async setItem(key:string, value:string): Promise<void> {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
            throw new Error("No se logro guardar el item");
        }
    }
    static async removeItem(key:string):Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
            throw new Error("No se logro eliminar el item");
        }
    }
}