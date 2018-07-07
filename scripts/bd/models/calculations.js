import app from '../../app';
import bd from '../bd';

const modelKey = 'calculations';

function getAllFromBd() {
    if (bd.has(modelKey)) {
        return JSON.parse(bd.get(modelKey));
    }

    return [];
}

function insertAllToBd(items) {
    return bd.set(modelKey, JSON.stringify(items));
}

export default {

    get(id) {
        let items = getAllFromBd();

        return items.find(item => item.id === id);
    },

    set(item) {
        const items = getAllFromBd();

        items.push(item);
        insertAllToBd(items);
    },

    remove(id) {
        let items = getAllFromBd();
        let index = items.findIndex(item => item.id === id);

        if (index !== -1) {
            items.splice(index, 1);
        }

        insertAllToBd(items);
    },

    has(id) {
        const items = getAllFromBd();

        return Boolean(items.find(item => item.id === id));
    },

    isFull() {
        let items = getAllFromBd();

        return items.length === app.data.maxCalculations;
    },

    getAll: getAllFromBd

};
