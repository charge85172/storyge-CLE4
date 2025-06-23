import { Actor, Scene, Vector, Color, FontUnit, Label, Font, Keys } from "excalibur";
import { Resources } from "../resources.js";
import { chinaQuestions } from "../assets/questions.js";
import { furnitureItem, chineseItem, item as generalItem } from "../items/itemregistry.js";

export class ItemReceiveScreen extends Scene {
    onInitialize(engine) {
        this.drawBackground(engine);
        this.answerButtons = [];
        this.currentItemIndex = null;
    }

    onActivate(ctx) {
        if (this.currentItem) {
            this.currentItem.kill();
            this.currentItem = null;
        }
        if (this.label) {
            this.label.text = "";
        }

        if (ctx?.data?.id != null) {
            const itemId = ctx.data.id;
            this.currentItemIndex = itemId;

            const item = this.createReceivedItem(itemId);
            this.add(item);
            this.currentItem = item;
            item.pos = new Vector(400, 360);
            item.scale = new Vector(0.19, 0.19);

            const question = this.getQuestionByItemId(itemId);
            if (question) {
                this.showQuestionUI(question);
            }
        }
    }

    onDeactivate() {
        if (this.currentItem) {
            this.currentItem.kill();
            this.currentItem = null;
        }
        if (this.label) {
            this.label.text = "";
        }
        this.answerButtons.forEach(btn => btn.kill());
        this.answerButtons = [];
    }

    getQuestionByItemId(itemId) {
        return chinaQuestions.find(q => {
            if (Array.isArray(q.itemId)) {
                return q.itemId.includes(itemId);
            }
            return q.itemId === itemId;
        });
    }

    showQuestionUI(question) {
        if (!this.questionLabel) return;

        this.questionLabel.text = question.text;

        // Clear old answer buttons
        this.answerButtons.forEach(btn => btn.kill());
        this.answerButtons = [];

        question.options.forEach((option, index) => {
            const button = new Label({
                text: option,
                pos: new Vector(800, 220 + index * 40),
                font: Resources.PressStart2P.toFont({ size: 10 }),
                color: Color.White,
                anchor: new Vector(0.5, 0.5)
            });

            button.on('pointerup', () => this.checkAnswer(option, question.answer));
            this.answerButtons.push(button);
            this.add(button);
        });
    }

    checkAnswer(selected, correct) {
        const isCorrect = Array.isArray(correct)
            ? correct.includes(selected)
            : selected === correct;

        const itemId = this.currentItemIndex;
        const engine = this.engine;

        if (!engine.playerProgress) engine.playerProgress = {};
        if (!engine.playerProgress[itemId]) engine.playerProgress[itemId] = {};

        if (isCorrect) {
            this.label.text = "Correct! Press space to place it.";
            this.promptLabel.text = "press space to place this item in your room";
            engine.playerProgress[itemId] = { received: true, correct: true };
        } else {
            this.label.text = "Wrong answer! Item lost.";
            this.promptLabel.text = "";
            engine.playerProgress[itemId] = { received: true, correct: false };

            if (this.currentItem) {
                this.currentItem.kill();
                this.currentItem = null;
            }
        }

        // Remove answer buttons
        this.answerButtons.forEach(btn => btn.kill());
        this.answerButtons = [];
    }

    drawBackground(engine) {
        const background = Resources.QuestionBook.toSprite();
        const backgroundActor = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            anchor: Vector.Half
        });
        backgroundActor.graphics.use(background);
        this.add(backgroundActor);

        this.label = new Label({
            pos: new Vector(290, 600),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White
        });
        this.add(this.label);

        const questionFont = Resources.PressStart2P.toFont({ size: 12 });
        questionFont.textAlign = 'center';

        this.questionLabel = new Label({
            pos: new Vector(900, 150),
            font: questionFont,
            color: Color.White,
            text: "",
            anchor: new Vector(0.5, 0.5)
        });
        this.add(this.questionLabel);

        this.promptLabel = new Label({
            text: "",
            pos: new Vector(400, 675),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
        });
        this.add(this.promptLabel);
    }

    createReceivedItem(idx) {
        const itemRegistry = [...furnitureItem, ...generalItem, ...chineseItem];
        const ItemClass = itemRegistry[idx];
        if (!ItemClass) {
            console.error("Invalid item index:", idx);
            return null;
        }

        const item = new ItemClass(new Vector(200, 360));
        const labelNames = [
            "A Bench!", "A Shelf!", "A Plant!", "A Window!", "A Hanged Plant!", "A Lamp!", "A Pillar!",
            "A Chinese Fan!", "A Dragon Scroll!", "A Chinese Porcelain!",
            "It's Sun Wukong", "It's Wukong's staff!", "A Gold Coin!", "A Gold Ingot!", "A Scroll!"
        ];
        this.label.text = labelNames[idx] || "Unknown item!";
        return item;
    }

    onPostUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            if (this.currentItem) {
                engine.goToScene('china');
                console.log("Back to China scene");
            } else {
                console.log("No item to place.");
            }
        }
    }
}
