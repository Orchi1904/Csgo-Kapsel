export const setStorageItem = (key: string, value: string) => {
    if(typeof window !== "undefined"){
        localStorage.setItem(key, value);
    }
}

export const getStorageItem = (key: string) => {
    if(typeof window !== "undefined"){
        return localStorage.getItem(key);
    }
    return null;
}