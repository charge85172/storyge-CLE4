import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class Scroll extends ChineseItem {
    constructor(pos) {
        const scrollSprite = Resources.Scroll.toSprite()
        super({
            pos: pos,
            sprite: scrollSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
