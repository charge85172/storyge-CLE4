import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class WukongStaff extends ChineseItem {
    constructor(pos) {
        const wukongStaffSprite = Resources.WukongStaff.toSprite()
        super({
            pos: pos,
            sprite: wukongStaffSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
