import { Prop } from "./prop.js"
import { Resources } from "../resources.js"

export class Plant extends Prop {
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
