import { Resources } from "../../../resources.js"
import { NormalItem } from "../proptypes/normalitem.js"

export class HangedPlant extends NormalItem {
    constructor(pos) {
        const hangedPlantSprite = Resources.HangedPlant.toSprite()
        super({
            pos: pos,
            sprite: hangedPlantSprite,
            scale: 0.1
        })
    }
}
