const STORAGE_NAME = 'MyLocalStorage'

// initialize
//localStorage.removeItem(STORAGE_NAME)

export default {

    get (idx) {
        const obj = getStorageObj()
        return obj[idx]
    },

    getAll () {
        return getStorageObj()
    },

    size () {
        const obj = getStorageObj()
        return obj.length
    },

    add (val) {
        const obj = getStorageObj()
        obj.push(val)
        setStorageObj(obj)
    },

    set (idx, val) {
        const obj = getStorageObj()
        obj[idx] = val
        setStorageObj(obj)
    },

    remove (idx) {
        const obj = getStorageObj()
        obj.splice(idx, 1)
        setStorageObj(obj)
    },

    clearAll () {
        setStorageObj([])
    }

}

function getStorageObj () {
    const storage = localStorage.getItem(STORAGE_NAME)
    return storage ? JSON.parse(storage) : []
}

function setStorageObj (storageObj) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storageObj))
}


