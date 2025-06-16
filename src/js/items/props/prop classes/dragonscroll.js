import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class DragonScroll extends ChineseItem {
    constructor(pos) {
        const dragonScrollSprite = Resources.DragonScroll.toSprite()
        super({
            pos: pos,
            sprite: dragonScrollSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
