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
        // todo clean up, no code above super call
        const scale = 0.2;
        const closedSprite = Resources.BoxClosed.toSprite();
        closedSprite.scale = new Vector(scale, scale);
        // Bottom center position
        const x = engine.drawWidth / 2;
        const y = engine.drawHeight - (closedSprite.height * scale) / 2 - 40;
        super({
            pos: new Vector(x, y),
            width: closedSprite.width * scale,
            height: closedSprite.height * scale,
            anchor: Vector.Half
        });
        this.graphics.use(closedSprite);
        this.openSprite = Resources.BoxOpen.toSprite();
        this.openSprite.scale = new Vector(scale, scale);
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

    // create a new instance of the item that we really want
    giveRandomItem() {
        const idx = Math.floor(Math.random() * 8);
        const item = this.createNewRandomItem(idx);

        // voorbeeld: 
        // item.tag = "chinese"

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


