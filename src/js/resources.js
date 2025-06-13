import { ImageSource, Loader } from "excalibur"


const Resources = {
    Background: new ImageSource('background.png'),
    Museum: new ImageSource('intro.png'),
    Quit: new ImageSource('quitbutton.png'),
    Start: new ImageSource('startbutton.png'),
    Plant: new ImageSource('plant.png'),
    GoldCoin: new ImageSource('goldcoin.png'),
    Room1: new ImageSource('room1.png'),
    Room2: new ImageSource('room2.png'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }

// code is tot hier gemaakt door charge
