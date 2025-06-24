import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class ChinesePorcelain extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChinesePorcelain.width, height: Resources.ChinesePorcelain.height })
        this.graphics.use(Resources.ChinesePorcelain.toSprite())
        this.scale = new Vector(0.1, 0.1)

        this.tag = "chineseItem"

        this.cellSize = 100

        this.allowedPositions = [
            { row: 6, column: 4 },
            { row: 6, column: 6.5 },
            { row: 6, column: 9 },
        ]

        this.currentIndex = 0;
        this.canMove = true; // Kan bewegen na spawnen

        this.placeAtPosition();

        // 7 seconde om te bewegen
        setTimeout(() => {
            this.canMove = false;
            console.log("Movement disabled after spawn");
        }, 7000); // Na 7 seconden kan je niet meer bewegen. Je moeder met je item verplaatsen.
    }

    placeAtPosition() {
        if (this.currentIndex >= this.allowedPositions.length) this.currentIndex = 0;
        if (this.currentIndex < 0) this.currentIndex = this.allowedPositions.length - 1;
        const pos = this.allowedPositions[this.currentIndex];
        this.pos.x = pos.column * this.cellSize;
        this.pos.y = pos.row * this.cellSize;
    }

    onPreUpdate(engine) {
        if (!this.canMove) return;
        if (!this.scene || this.scene.engine.currentSceneKey !== 'china') return;
        if (!engine.mygamepad) return;
        const gp = engine.mygamepad;
        if (gp.isButtonPressed(12)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (gp.isButtonPressed(13)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
        if (gp.isButtonPressed(14)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (gp.isButtonPressed(15)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
    }
}
