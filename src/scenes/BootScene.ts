import * as Phaser from "phaser";
import { GameScene } from "./GameScene";

export class BootScene extends Phaser.Scene {
    public static readonly Key = "BootScene";

    constructor() {
        super({
            key: BootScene.Key
        });
    }


    create(): void {
        this.scene.start(GameScene.Key);
    }
}