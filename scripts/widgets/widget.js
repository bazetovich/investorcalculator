class Widget {
    constructor() {
        this.wrap = null;
    }
    setModel(data) {
        this.model = data || {};   
    }
    getModel() {
        return this.model || {};
    }
}

export default Widget;
