import { Actor, Vector } from "excalibur"
import { Resources } from "../resources.js"

export class StartButton extends Actor {
    constructor(pos, onClick) {
        const sprite = Resources.StartButton.toSprite()
        super({
            pos: pos,
            width: sprite.width,
            height: sprite.height
        })
        this.graphics.use(sprite)
    }
}

// code is tot hier gemaakt door charge
