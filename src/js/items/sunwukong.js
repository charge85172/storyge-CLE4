import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class SunWukong extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseSunWukong.width, height: Resources.ChineseSunWukong.height })
        this.graphics.use(Resources.ChineseSunWukong.toSprite())
        this.scale = new Vector(1, 1)
    }
}
