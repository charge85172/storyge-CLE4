import { Resources } from "../../../resources.js"
import { Furniture } from "../proptypes/furnitureitem.js"

export class Window extends Furniture {
    constructor(pos) {
        const windowSprite = Resources.Window.toSprite()
        super({
            pos: pos,
            sprite: windowSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
