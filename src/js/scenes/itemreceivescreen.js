import { Actor, Scene, Vector, Color, FontUnit, Label, Font, Keys } from "excalibur";
import { Resources } from "../resources.js";
import { chinaQuestions } from "../assets/questions.js";
import { furnitureItem, chineseItem, item as generalItem } from "../items/itemregistry.js";

export class ItemReceiveScreen extends Scene {

    onInitialize(engine) {
        this.drawBackground(engine)
    }

    onActivate(ctx) {
        // Verwijder het vorige item als het bestaat
        if (this.currentItem) {
            this.currentItem.kill();
            this.currentItem = null;
        }
        // Maak de label leeg voordat een nieuw item wordt getoond
        if (this.label) {
            this.label.text = "";
        }
        if (ctx?.data?.id != null) {  // Laat ID 0 toe, maar check of ctx.data bestaat
            console.log("boek ontvangt item: " + ctx.data.id);
            const item = this.createReceivedItem(ctx.data.id);
            this.add(item);
            this.currentItem = item;
            item.pos = new Vector(400, 360);
            item.scale = new Vector(0.19, 0.19);

            const question = this.getQuestionByItemId(ctx.data.id);
            if (question) {
                this.showQuestionUI(question);
            }
        }
    }

    onDeactivate() {
        // Verwijder het huidige item wanneer je de scene verlaat
        if (this.currentItem) {
            this.currentItem.kill();
            this.currentItem = null;
            // Reset de positie
        }
        // Maak de label leeg bij het verlaten van de scene
        if (this.label) {
            this.label.text = "";
        }
    }

    getQuestionByItemId(itemId) {
        return chinaQuestions.find(q => {
            if (Array.isArray(q.itemId)) {
                return q.itemId.includes(itemId)
            }
            return q.itemId === itemId;
        });
    }

    showQuestionUI(question) {
        if (!this.questionLabel) return;

        this.questionLabel.text = question.text;

        // (Optional) Also show options in console for debugging
        console.log("Question:", question.text);
        question.options.forEach((opt, i) => {
            console.log(`${i + 1}. ${opt}`);
        });
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

        // text
        this.label = new Label({
            pos: new Vector(290, 600),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White
        })
        this.add(this.label)

        // Create the font and then set textAlign
        const questionFont = Resources.PressStart2P.toFont({ size: 12 });
        questionFont.textAlign = 'center';

        // Question label
        this.questionLabel = new Label({
            pos: new Vector(900, 150), // Center X position
            font: questionFont,
            color: Color.White,
            text: "",
            anchor: new Vector(0.5, 0.5) // Optional: center align the label's anchor too
        });
        this.add(this.questionLabel);

        // prompt under the book
        this.promptLabel = new Label({
            text: "press space to place this item in your room",
            pos: new Vector(400, 675), // visually under the book
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
        });
        this.add(this.promptLabel);

    }

    // When an item is received
    onItemReceived(itemIndex) {
        const item = createReceivedItem(itemIndex); // your function
        const question = QuestionBook.getQuestionByItemId(itemIndex);

        if (question) {
            showQuestionUI(question); // your own UI rendering function
        } else {
            console.log("No question for this item.");
        }
    }

    createReceivedItem(idx) {
        // Combineer losse items in enkele array
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
            engine.goToScene('china');
            console.log("Back to China scene");
        }
    }
}