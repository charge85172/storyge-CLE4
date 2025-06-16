import { Resources } from "../../../resources.js"
import { NormalItem } from "../proptypes/normalitem.js"

export class Plant extends NormalItem {
    constructor(pos) {
        const plantSprite = Resources.Plant.toSprite()
        super({
            pos: pos,
            sprite: plantSprite,
            scale: 0.1
        })
    }
}

// code is tot hier gemaakt door charge
