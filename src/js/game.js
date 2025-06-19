import { Engine, DisplayMode, Scene, Actor, Vector } from "excalibur"
import { ResourceLoader } from "./resources.js"
import { StartScreen } from "./scenes/startscreen.js"
import { GameScene } from "./scenes/gamescene.js"
import { ItemReceiveScreen } from "./scenes/itemreceivescreen.js"

export class Game extends Engine {

    playerProgress

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 30,
            pixelRatio: 1,
            pixelArt: true,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.setupScenes())
    }

    setupScenes() {
        this.playerProgress = []

        this.add('start', new StartScreen())
        this.add('game', new GameScene())
        this.add('itemreceivescreen', new ItemReceiveScreen());
        this.goToScene('start')
    }
}

new Game()