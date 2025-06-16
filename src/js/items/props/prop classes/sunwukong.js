import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class SunWukong extends ChineseItem {
    constructor(pos) {
        const sunWukongsprite = Resources.SunWukong.toSprite()
        super({
            pos: pos,
            sprite: sunWukongsprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
