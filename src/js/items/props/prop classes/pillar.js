import { Resources } from "../../../resources.js"
import { Furniture } from "../proptypes/furnitureitem.js"

export class Pillar extends Furniture {
    constructor(pos) {
        const pillarSprite = Resources.Pillar.toSprite()
        super({
            pos: pos,
            sprite: pillarSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
