import { Actor, Vector, Keys, Label, Color } from "excalibur";
import { Resources } from "../resources.js";
import { furnitureItem, chineseItem, item as generalItem } from "./itemregistry.js";

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

        // Initialize queues as copies of the imported arrays
        this.furnitureQueue = [...furnitureItem];
        this.generalQueue = [...generalItem];
        this.culturalQueue = [...chineseItem];

        // Save a combined registry for ID lookup
        this.itemRegistry = [...this.furnitureQueue, ...this.generalQueue, ...this.culturalQueue];
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

        if (this.promptLabel) {
            this.promptLabel.text = "press space to grab an item";
            this.promptLabel.pos = new Vector(-150, 90);
        }
    }

    giveRandomItem() {
        let itemClass = null;

        if (this.furnitureQueue.length > 0) {
            // Eerst furtnitureQueue (furniture items)
            const index = Math.floor(Math.random() * this.furnitureQueue.length);
            itemClass = this.furnitureQueue.splice(index, 1)[0];
        } else {
            // combineer culturalQueue (chinese items) en generalQueue (items)
            const combinedQueues = [];

            // Kijk waar welke items vandaan komen
            this.culturalQueue.forEach(item => combinedQueues.push({ item, source: 'cultural' }));
            this.generalQueue.forEach(item => combinedQueues.push({ item, source: 'general' }));

            if (combinedQueues.length > 0) {
                const index = Math.floor(Math.random() * combinedQueues.length);
                const chosen = combinedQueues[index];

                itemClass = chosen.item;

                // Haal het item uit de juiste queue (zorg dat het niet wordt hergebruikt)
                if (chosen.source === 'cultural') {
                    const removeIndex = this.culturalQueue.indexOf(itemClass);
                    if (removeIndex !== -1) this.culturalQueue.splice(removeIndex, 1);
                } else {
                    const removeIndex = this.generalQueue.indexOf(itemClass);
                    if (removeIndex !== -1) this.generalQueue.splice(removeIndex, 1);
                }
            } else {
                console.log("All items unpacked!");
                this.scene.engine.goToScene('start');
                return;
            }
        }

        if (itemClass) {
            const id = this.itemRegistry.findIndex(cls => cls === itemClass);
            const isChinese = chineseItem.includes(itemClass);

            if (!isChinese) {
                const itemInstance = new itemClass();
                this.scene.add(itemInstance);

                this.scene.engine.playerProgress.push({ id, correct: true }); // Immediate placement
                console.log("Non-Chinese item placed immediately");
            } else {
                // Store class only, not instance (we create it later if answer is correct)
                this.scene.engine.pendingChineseItemClass = itemClass;
            }

            this.scene.engine.goToScene('itemreceivescreen', {
                sceneActivationData: { id }
            });
        }

    }

}
