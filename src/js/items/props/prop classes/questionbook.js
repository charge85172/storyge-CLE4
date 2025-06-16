import { Actor, Vector } from "excalibur"
import { Resources } from "../../../resources.js"

export class QuestionBook extends Actor {
    constructor(pos) {
        const questionBookSprite = Resources.QuestionBook.toSprite()
        super({
            pos: pos,
            width: questionBookSprite.width,
            height: questionBookSprite.height
        })
        this.graphics.use(questionBookSprite)
    }
}