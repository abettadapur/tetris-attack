import * as Phaser from "phaser";
import { Mushroom, Star, Triangle, Heart, Square, Diamond } from "../assets/Assets";

export const TILE_SIZE = 50;

export class GameScene extends Phaser.Scene {
    public static readonly Key = "GameScene";
    private cursors;
    private tileGroup: Phaser.GameObjects.Group;

    constructor() {
        super({
            key: GameScene.Key
        } as any);
    }

    preload() {
        this.load.image(Mushroom.key, Mushroom.path);
        this.load.image(Star.key, Star.path);
        this.load.image(Triangle.key, Triangle.path);
        this.load.image(Heart.key, Heart.path);
        this.load.image(Square.key, Square.path);
        this.load.image(Diamond.key, Diamond.path);
    }

    create() {
        this.tileGroup = this.add.group({});
        for (let i = 0; i < 6; i++) {
            const tile = this.add.sprite(i * TILE_SIZE + TILE_SIZE / 2, TILE_SIZE / 2, Triangle.key);
            tile.width = 50;
            tile.height = 50;
            tile.setDisplaySize(50, 50);

            this.tileGroup.add(tile);
        }

        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.on("keydown", this.onKeyDown);

    }

    update() {
    }

    addTile() {

    }

    onKeyDown = (event) => {
        console.log(event);

        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.DOWN) {
            this.tweens.add({
                targets: [this.tileGroup.children.entries[0]],
                y: 600,
                ease: Phaser.Math.Easing.Quadratic.In,
                duration: 500
            });
        }
    }
}