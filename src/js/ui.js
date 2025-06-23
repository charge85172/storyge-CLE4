import { Label, ScreenElement, Vector, Color } from "excalibur";
import { Resources } from "./resources";

export class UI extends ScreenElement {
    checklistLabels = [];

    chineseItems = [
        { key: 7, label: 'Chinese Fan' },
        { key: 9, label: 'Chinese Porcelain' },
        { key: 8, label: 'Dragon Scroll' },
        { key: 12, label: 'Gold Coin' },
        { key: 13, label: 'Gold Ingot' },
        { key: 10, label: 'Sun Wukong' },
        { key: 11, label: 'Wukong Staff' }
    ];

    onInitialize(engine) {
        this.createChecklist(engine);
    }

    createChecklist(engine) {
        this.checklistLabels.forEach(label => this.removeChild(label));
        this.checklistLabels = [];

        let progress = {};
        if (engine.playerProgress) {
            progress = engine.playerProgress;
        }

        this.chineseItems.forEach((item, idx) => {
            const itemProgress = progress[item.key] || {};
            const checked = itemProgress.received && itemProgress.correct;
            const label = new Label({
                text: `${checked ? '✔' : '☐'} ${item.label}`,
                pos: new Vector(50, 50 + idx * 30),
                font: Resources.PressStart2P.toFont({ size: 12 }),
                color: checked ? Color.Green : Color.White
            });
            this.addChild(label);
            this.checklistLabels.push(label);
        });
    }

    onPreUpdate(engine, delta) {
        this.createChecklist(engine);
    }
}
