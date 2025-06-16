import { Prop } from "../prop"

export class ChineseItem extends Prop {
    constructor(options) {
        super({ ...options, itemType: "chinese" })
    }
}