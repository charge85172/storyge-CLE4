import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class GoldIngot extends ChineseItem {
    constructor(pos) {
        const goldIngotSprite = Resources.GoldIngot.toSprite()
        super({
            pos: pos,
            sprite: goldIngotSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
