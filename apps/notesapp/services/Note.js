import { getRandomId } from "../../../services/utils.js";
export default class Note {

    constructor(type, info) {
        this.type = type;
        this.info = info;
        this.id = getRandomId();
    }
}

