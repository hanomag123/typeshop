
export function getItemFromLocal<T>(key: string, defaultValue: T): T {
    return JSON.parse(localStorage.getItem(key) || `${defaultValue}`)
}

