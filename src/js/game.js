import { Engine, DisplayMode, Scene, Actor, Vector } from "excalibur"
import { ResourceLoader } from "./resources.js"
import { StartScreen } from "./scenes/startscreen.js"
import { GameScene } from "./scenes/gamescene.js"
import { ItemReceiveScreen } from "./scenes/itemreceivescreen.js"
import { UI } from "./ui.js"
import { Player } from "./player.js"

export class Game extends Engine {

    ui;
    playerProgress;
    mygamepad;

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 30,
            pixelRatio: 1,
            pixelArt: true,
            displayMode: DisplayMode.FitScreen
        })
        this._suppressPlayButton = true; // Prevents the play button from showing up in the browser
        this.start(ResourceLoader).then(() => this.setupScenes())
    }

    startGame(){
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            this.mygamepad = connectevent.gamepad
        })
    }

    


    setupScenes() {
        this.playerProgress = [];

        this.add('start', new StartScreen())
        this.add('game', new GameScene())
        this.add('itemreceivescreen', new ItemReceiveScreen());
        this.goToScene('start')

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            this.mygamepad = connectevent.gamepad
        })
    }

    onPreUpdate() {
    }

    onPostUpdate() {
        if (this.mygamepad) {
        }
    }
}

new Game()