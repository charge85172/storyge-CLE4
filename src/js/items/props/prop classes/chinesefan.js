import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class Chinesefan extends ChineseItem {
    constructor(pos) {
        const chineseFanSprite = Resources.ChineseFan.toSprite()
        super({
            pos: pos,
            sprite: chineseFanSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
