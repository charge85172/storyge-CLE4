import { Resources } from "../../../resources.js"
import { Furniture } from "../proptypes/furnitureitem.js"

export class Shelf extends Furniture {
    constructor(pos) {
        const shelfSprite = Resources.Shelf.toSprite()
        super({
            pos: pos,
            sprite: shelfSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
