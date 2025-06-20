import { Actor, Vector } from "excalibur"
import { Resources } from "../resources.js"
import { chinaQuestions } from "../assets/questions.js"

export class QuestionBook extends Actor {
    constructor(pos, title = "", chinaQuestions = []) {
        const sprite = Resources.QuestionBook.toSprite()
        super({
            pos: pos,
            width: sprite.width,
            height: sprite.height
        })
        this.graphics.use(sprite);
        this.title = title;
        this.questions = chinaQuestions;
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