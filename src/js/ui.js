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

    testLabel;

    onInitialize(engine) {
        console.log("UI initialized");

        console.log(this.scene.engine.playerProgress);
        
        this.testLabel = new Label({
            text: "test",
            pos: new Vector(1100, 500),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
        });
        this.addChild(this.testLabel);
        console.log(this.testLabel);


    };
}