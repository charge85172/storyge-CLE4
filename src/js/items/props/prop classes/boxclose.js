import { Prop } from "../prop.js"
import { Resources } from "../../../resources.js"

export class BoxClosed extends Prop {
    constructor(pos) {
        const boxClosedSprite = Resources.BoxClosed.toSprite()
        super({
            pos: pos,
            sprite: boxClosedSprite,
            scale: 0.15 // Adjust scale as needed
        })
    }
}
