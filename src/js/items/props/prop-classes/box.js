import { Actor, Vector } from "excalibur";
import { Resources } from "../../../resources.js";
import { Bench } from "./bench.js";
import { Lamp } from "./lamp.js";
import { Pillar } from "./pillar.js";
import { HangedPlant } from "./hangedPlant.js";
import { Chinesefan } from "./chinesefan.js";
import { GoldCoin } from "./goldcoin.js";
import { GoldIngot } from "./goldingot.js";
import { Scroll } from "./scroll.js";
import { ItemReceiveScreen } from "../../../scenes/itemreceivescreen.js";

export class Box extends Actor {
    constructor(engine) {
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
        this.engine = engine; // Save reference for later
        this.items = [
            new Bench(new Vector(200, 360)),
            new Lamp(new Vector(200, 360)),
            new Pillar(new Vector(200, 360)),
            new HangedPlant(new Vector(200, 360)),
            new Chinesefan(new Vector(200, 360)),
            new GoldCoin(new Vector(200, 360)),
            new GoldIngot(new Vector(200, 360)),
            new Scroll(new Vector(200, 360)),
        ];
        this.lastGivenItem = null;

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === "Space") {
                if (!this.isOpen) {
                    this.openBox();
                } else {
                    this.giveRandomItem();
                }
            }
        });
    }

    openBox() {
        if (this.isOpen) return;
        this.graphics.use(this.openSprite);
        this.isOpen = true;
    }

    giveRandomItem() {
        // Pick a random item
        const idx = Math.floor(Math.random() * this.items.length);
        const item = this.items[idx];
        this.lastGivenItem = item;
        // Pass the item to the ItemReceiveScreen scene
        if (!this.engine.scenes['ItemReceiveScreen']) {
            this.engine.add('ItemReceiveScreen', new ItemReceiveScreen());
        }
        this.engine.goToScene('ItemReceiveScreen', { item });
        console.log(`Given item: ${item.constructor.name}`);
    }
}
