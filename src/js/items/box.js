import { Actor, Vector, Keys, Label, Color } from "excalibur";
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

        // Add label for prompt
        this.promptLabel = new Label({
            text: "press space to begin unpacking",
            pos: new Vector(-175, 90),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
            anchor: Vector.Half
        });
        this.addChild(this.promptLabel);
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
        // Update label
        if (this.promptLabel) {
            this.promptLabel.text = "press space to grab an item";
            this.promptLabel.pos = new Vector(-150, 90);
        }
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


