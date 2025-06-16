import { Resources } from "../../../resources.js"
import { NormalItem } from "../proptypes/normalitem.js"

export class Bench extends NormalItem {
    constructor(pos) {
        const benchSprite = Resources.Bench.toSprite()
        super({
            pos: pos,
            sprite: benchSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
