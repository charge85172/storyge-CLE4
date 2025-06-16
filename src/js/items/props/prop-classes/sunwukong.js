import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class SunWukong extends ChineseItem {
    constructor(pos) {
        const sunWukongSprite = Resources.ChineseSunWukong.toSprite()
        super({
            pos: pos,
            sprite: sunWukongSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
