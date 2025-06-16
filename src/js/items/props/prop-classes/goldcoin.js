import { Resources } from "../../../resources.js"
import { ChineseItem } from "../proptypes/chineseitem.js"

export class GoldCoin extends ChineseItem {
    constructor(pos) {
        const goldCoinSprite = Resources.ChineseGoldCoin.toSprite()
        super({
            pos: pos,
            sprite: goldCoinSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
