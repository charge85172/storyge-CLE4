import { Actor, Vector } from "excalibur"
import { Resources } from "../../../resources.js"

export class QuestionBook extends Actor {
    constructor(pos, title = "", questions = []) {
        const sprite = Resources.QuestionBook.toSprite()
        super({
            pos: pos,
            width: sprite.width,
            height: sprite.height
        })
        this.graphics.use(sprite)
        this.title = title
        this.questions = questions
    }

    addQuestion(question) {
        this.questions.push(question)
    }

    getQuestion(index) {
        return this.questions[index]
    }

    getAllQuestions() {
        return this.questions
    }
}