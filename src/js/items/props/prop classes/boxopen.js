import { Prop } from "../prop.js"
import { Resources } from "../../../resources.js"

export class BoxOpen extends Prop {
    constructor(pos) {
        const boxOpenSprite = Resources.BoxOpen.toSprite()
        super({
            pos: pos,
            sprite: boxOpenSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
