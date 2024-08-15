import { MMKV } from "react-native-mmkv";
import { StateStorage } from 'zustand/middleware'

const mmkvStore = new MMKV({
    id: 'cart-storage'
})

const zustandStorage: StateStorage = {
    setItem: (name: string, value: string) => {
        return mmkvStore.set(name, value);
    },
    getItem: (name: string) => {
        const value = mmkvStore.getString(name);
        return value ?? null;
    },
    removeItem: (name: string) => {
        return mmkvStore.delete(name)
    }
}

export { mmkvStore, zustandStorage }