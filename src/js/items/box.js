import { Actor, Vector, Keys } from "excalibur";
import { Resources } from "../resources.js";
import { Bench } from "./bench.js";
import { Lamp } from "./lamp.js";
import { Pillar } from "./pillar.js";
import { HangedPlant } from "./hangedPlant.js";
import { Chinesefan } from "./chinesefan.js";
import { GoldCoin } from "./goldcoin.js";
import { GoldIngot } from "./goldingot.js";
import { Scroll } from "./scroll.js";

export class Box extends Actor {
    constructor(engine) {
        super({
            pos: new Vector(640, 560),
            width: Resources.BoxClosed.width * 0.2,
            height: Resources.BoxClosed.height * 0.2,
            anchor: Vector.Half
        });
        const closedSprite = Resources.BoxClosed.toSprite();
        closedSprite.scale = new Vector(0.2, 0.2);
        this.graphics.use(closedSprite);

        this.openSprite = Resources.BoxOpen.toSprite();
        this.openSprite.scale = new Vector(0.2, 0.2);
        this.isOpen = false;
        this.lastGivenItem = null;
    }

    onPostUpdate() {
        if (this.scene.engine.input.keyboard.wasPressed(Keys.Space)) {
            if (!this.isOpen) {
                this.openBox();
            } else {
                this.giveRandomItem();
            }
        }
    }

    openBox() {
        if (this.isOpen) return;
        this.graphics.use(this.openSprite);
        this.isOpen = true;
    }

    // create a new instance of the item, send that item to the book scene
    // note: you could also just send the id to the book scene
    giveRandomItem() {
        const id = Math.floor(Math.random() * 8)
        const item = this.createNewRandomItem(id)
        this.lastGivenItem = item;
        this.scene.engine.goToScene('itemreceivescreen', { sceneActivationData: { item } });
    }

    createNewRandomItem(idx) {
        switch (idx) {
            case 0:
                return new Bench(new Vector(200, 360));
            case 1:
                return new Lamp(new Vector(200, 360));
            case 2:
                return new Pillar(new Vector(200, 360));
            case 3:
                return new HangedPlant(new Vector(200, 360));
            case 4:
                return new Chinesefan(new Vector(200, 360));
            case 5:
                return new GoldCoin(new Vector(200, 360));
            case 6:
                return new GoldIngot(new Vector(200, 360));
            case 7:
                return new Scroll(new Vector(200, 360));
            default:
                console.error("Dit item bestaat dus niet:", idx);
                return null;
        }
    }


}


