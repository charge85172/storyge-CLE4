import { Actor, Vector, Keys } from "excalibur";
import { Resources } from "../resources.js";

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

    // - genereer hier alleen het ID van een nieuw random item (0 tot 7)
    // - plaats dat ID in de main game playerProgress en geef het door aan de book scene
    giveRandomItem() {
        const id = Math.floor(Math.random() * 8)
        this.lastGivenItem = id;
        this.scene.engine.playerProgress.push(id)
        this.scene.engine.goToScene('itemreceivescreen', { sceneActivationData: { id } });
    }

    


}


