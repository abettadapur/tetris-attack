import * as Phaser from 'phaser';
import { BootScene } from "./scenes/BootScene";
import { GameScene } from "./scenes/GameScene";

const config: GameConfig = {
    // render type
    type: Phaser.CANVAS,

    // game width, in pixels
    width: 300,

    // game height, in pixels
    height: 600,

    // game background color
    backgroundColor: "#000044",

    scene: [
        BootScene,
        GameScene
    ]
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
        // this.scene.add(BootScene.Key, BootScene);
        // this.scene.add(GameScene.Key, GameScene);

        this.scene.start(BootScene.Key);
    }
}

window.onload = () => {
    var game = new Game(config);
}