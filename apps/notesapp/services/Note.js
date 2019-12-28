import { getRandomId } from "../../../services/utils.js";
export default class Note {

    constructor(type, info, color = "#fff8dc") {
        this.type = type;
        this.info = info;
        this.style.backgroundColor = color 
        this.id = getRandomId();
    }
}

