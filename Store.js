import {AsyncStorage} from 'react-native'

function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Store {
    constructor(items) {
        for(const item of items) {
            Object.defineProperty(this, item, {
                get: () => AsyncStorage.getItem(item)
            })

            this[`set${ucfirst(item)}`] = (v) => AsyncStorage.setItem(item, v)
        }
    }
}