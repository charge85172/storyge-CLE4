import { Actor, Vector } from "excalibur"
import { Resources } from "../resources.js"

export class QuitButton extends Actor {
    constructor(pos, onClick) {
        const sprite = Resources.Quit.toSprite()
        super({
            pos: pos,
            width: sprite.width,
            height: sprite.height
        })
        this.graphics.use(sprite)
        this.on('pointerup', onClick)
    }
}
