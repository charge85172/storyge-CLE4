import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class Scroll extends ChineseItem {
    constructor(pos) {
        const scrollSprite = Resources.ChineseScroll.toSprite()
        super({
            pos: pos,
            sprite: scrollSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
