const localStorage = window.localStorage;

export default {

    get(key) {
        return localStorage.getItem(key);
    },

    set(key, value) {
        localStorage.setItem(key, value);
    },

    remove(key) {
        localStorage.removeItem(key);
    },

    has(key) {
        return Boolean(localStorage.getItem(key));
    }

};
