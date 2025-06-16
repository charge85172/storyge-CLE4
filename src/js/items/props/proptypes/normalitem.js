import { Prop } from "../prop"

export class NormalItem extends Prop {
    constructor(options) {
        super({ ...options, itemType: "normal" })
    }
}