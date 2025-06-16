import { Resources } from "../../../resources.js"
import { NormalItem } from "../proptypes/normalitem.js"

export class Lamp extends NormalItem {
    constructor(pos) {
        const lampSprite = Resources.Lamp.toSprite()
        super({
            pos: pos,
            sprite: lampSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
