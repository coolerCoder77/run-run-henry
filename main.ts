namespace SpriteKind {
    export const Player_2 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.splash("Player 1 ", "Wins")
    game.over(true)
})
scene.onHitWall(SpriteKind.Player_2, function (sprite, location) {
    game.splash("Player 2", "Wins")
    game.over(true)
})
tiles.setTilemap(tilemap`level 1`)
let mySprite = sprites.create(assets.image`Henry`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
let mySprite2 = sprites.create(assets.image`Claire`, SpriteKind.Player_2)
controller.player2.moveSprite(mySprite2, 100, 0)
scene.cameraFollowSprite(mySprite)
