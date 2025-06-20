import { Label, ScreenElement, Vector, Font, Color, TextAlign, Actor } from "excalibur";
import { Resources } from "./resources";
// import { Chinesefan } from "./items/chinesefan";
// import { ChinesePorcelain } from "./items/chineseporcelain";
// import { DragonScroll } from "./items/dragonscroll";
// import { GoldCoin } from "./items/goldcoin";
// import { GoldIngot } from "./items/goldingot";
// import { Scroll } from "./items/scroll";
// import { SunWukong } from "./items/sunwukong";
// import { WukongStaff } from "./items/wukongstaff";

export class UI extends ScreenElement {

    checklistLabels = [];
    chineseItems = [
        { key: 5, label: 'Chinese Fan' },
        { key: null, label: 'Chinese Porcelain' },
        { key: null, label: 'Dragon Scroll' },
        { key: 6, label: 'Gold Coin' },
        { key: 7, label: 'Gold Ingot' },
        { key: 8, label: 'Scroll' },
        { key: null, label: 'Sun Wukong' },
        { key: null, label: 'Wukong Staff' }
    ];

    onInitialize(engine) {
        console.log("UI initialized");
        // @ts-ignore: playerProgress is a custom property
        if (this.scene && this.scene.engine && this.scene.engine.playerProgress) {
            // @ts-ignore: playerProgress is a custom property
            console.log(this.scene.engine.playerProgress);
        }


        // Checklist UI
        this.createChecklist(engine);
    }

    createChecklist(engine) {
        // Remove old checklist labels if any
        this.checklistLabels.forEach(label => this.removeChild(label));
        this.checklistLabels = [];
        let progress = {};
        // @ts-ignore: playerProgress is a custom property
        if (this.scene && this.scene.engine && this.scene.engine.playerProgress) {
            // @ts-ignore: playerProgress is a custom property
            progress = this.scene.engine.playerProgress;
        }
        this.chineseItems.forEach((item, idx) => {
            // Assume playerProgress[item.key] = { received: true/false, correct: true/false }
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
        // Update checklist every frame in case progress changes
        this.createChecklist(engine);
    }
}