import { Prop } from "../prop"

export class Furniture extends Prop {
    constructor(options) {
        super({ ...options, itemType: "furniture" })
    }
}