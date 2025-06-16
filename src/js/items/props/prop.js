import { Actor, Vector } from "excalibur"

export class Prop extends Actor {
    constructor({ pos, sprite, scale = 1 }) {
        if (sprite && scale !== 1) {
            sprite.scale = sprite.scale.scale(scale)
        }
        super({
            pos: pos,
            width: sprite ? sprite.width : 0,
            height: sprite ? sprite.height : 0
        })
        if (sprite) {
            this.graphics.use(sprite)
        }
        this.itemType = "prop" // Default item type
    }

    isType(type) {
        return this.itemType === type
    }
}
