import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class ChinesePorcelain extends ChineseItem {
    constructor(pos) {
        const chinesePorcelainSprite = Resources.ChinesePorcelain.toSprite()
        super({
            pos: pos,
            sprite: chinesePorcelainSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
