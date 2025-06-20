import { Actor, Scene, Vector, Color, FontUnit, Label, Font, Keys } from "excalibur";
import { Resources } from "../resources.js";
import { Bench } from "../items/bench.js";
import { Lamp } from "../items/lamp.js";
import { Pillar } from "../items/pillar.js";
import { HangedPlant } from "../items/hangedPlant.js";
import { Chinesefan } from "../items/chinesefan.js";
import { GoldCoin } from "../items/goldcoin.js";
import { GoldIngot } from "../items/goldingot.js";
import { Scroll } from "../items/scroll.js";
import { ChinesePorcelain } from "../items/chineseporcelain.js";
import { DragonScroll } from "../items/dragonscroll.js";
import { Plant } from "../items/plant.js";
import { Shelf } from "../items/shelf.js";  
import { SunWukong } from "../items/sunwukong.js";
import { Window } from "../items/window.js";
import { WukongStaff } from "../items/wukongstaff.js";
import { chinaQuestions } from "../assets/questions.js";

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
        if (ctx?.data?.id) {
            // Hier krijg je een ID binnen
            console.log("boek ontvangt item: " + ctx.data.id);
            // Plaats het juiste object voor dit ID in het boek
            const item = this.createReceivedItem(ctx.data.id)
            this.add(item)
            this.currentItem = item;
            // Schaal en positie kun je hier ook nog aanpassen
            item.pos = new Vector(360, 360);

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
        }
        // Maak de label leeg bij het verlaten van de scene
        if (this.label) {
            this.label.text = "";
        }
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

        // Question label
        this.questionLabel = new Label({
            pos: new Vector(400, 500), // Adjust position as needed
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
            text: ""
        });
        this.add(this.questionLabel);

        // text
        this.label = new Label({
            pos: new Vector(800, 250),
            font: Resources.PressStart2P.toFont({ size: 12 }),
        })
        this.add(this.label)

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
        const question = questionBook.getQuestionByItemId(itemIndex);

        if (question) {
            showQuestionUI(question); // your own UI rendering function
        } else {
            console.log("No question for this item.");
        }
    }

    createReceivedItem(idx) {
        switch (idx) {
            case 1:
                this.label.text = "A bench!"
                return new Bench(new Vector(200, 360));
            case 2:
                this.label.text = "A lamp!"
                return new Lamp(new Vector(200, 360));
            case 3:
                this.label.text = "An old pillar!"
                return new Pillar(new Vector(200, 360));
            case 4:
                this.label.text = "A hanging plant!"
                return new HangedPlant(new Vector(200, 360));
            case 5:
                this.label.text = "A Chinese Fan!"
                return new Chinesefan(new Vector(200, 360));
            case 6:
                this.label.text = "A golden coin!"
                return new GoldCoin(new Vector(200, 360));
            case 7:
                this.label.text = "A gold ingot!"
                return new GoldIngot(new Vector(200, 360));
            case 8:
                this.label.text = "A Scrolly scroll!"
                return new Scroll(new Vector(200, 360));
            case 9:
                this.label.text = "A Chinese Porcelain!"
                return new ChinesePorcelain(new Vector(200, 360));
            case 10:
                this.label.text = "A Dragon Scroll!"
                return new DragonScroll(new Vector(200, 360));
            case 11:
                this.label.text = "A Plant!"
                return new Plant(new Vector(200, 360));
            case 12:
                this.label.text = "A Shelf!"
                return new Shelf(new Vector(200, 360));
            case 13:
                this.label.text = "It's Sun Wukong"
                return new SunWukong(new Vector(200, 360));
            case 14:
                this.label.text = "A Window!"
                return new Window(new Vector(200, 360));
            case 15:
                this.label.text = "It's Wukong's staff!"
                // Hier kun je een nieuw item toevoegen als je dat wilt
                return new WukongStaff(new Vector(200, 360));
            default:
                console.error("Dit item bestaat dus niet:", idx);
                return null;
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


    onPostUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene('china');
            console.log("Back to China scene");
        }
    }
}