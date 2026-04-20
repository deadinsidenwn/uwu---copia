namespace SpriteKind {
    export const bonus = SpriteKind.create()
}
function escenario () {
    if (nivel == 2) {
        nivel = 3
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`level1`)
        jugador.setPosition(20, 80)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . f 2 2 2 2 2 f . . . . . . 
        . . . . f 2 2 2 f . . . . . . . 
        . . . . f 2 2 2 f . . . . . . . 
        . . . . f 2 2 2 f . . . . . . . 
        . . . . f 2 2 2 f . . . . . . . 
        . . . . f 1 1 1 f . . . . . . . 
        . . . . f 2 2 2 f . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, jugador, 0, 70)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    if (nivel2 == 1) {
        tiles.setCurrentTilemap(tilemap`nivel1`)
        music.stopAllSounds()
        music.play(music.stringPlayable("F G A G A B C5 C5 ", 120), music.PlaybackMode.UntilDone)
        nivel2 = 2
    } else if (nivel2 == 2) {
        tiles.setCurrentTilemap(tilemap`nivel1`)
        music.stopAllSounds()
        music.play(music.stringPlayable("F G A G A B C5 C5 ", 120), music.PlaybackMode.UntilDone)
        nivel2 = 3
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`miMosaico1`, function (sprite, location) {
    sprites.destroy(carminitas)
    sprites.destroy(carminitas)
    sprites.destroy(gatitaliens2)
    sprites.destroy(gatitaliens2)
    sprites.destroy(romas)
    sprites.destroy(romas)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 200)
    info.stopCountdown()
    game.setGameOverEffect(false, effects.melt)
    music.stopAllSounds()
    game.gameOver(false)
    music.play(music.stringPlayable("A E G E D D F - ", 120), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico0`, function (sprite, location) {
    nivel2 = 3
    jugador.setPosition(72, 24)
    tiles.setCurrentTilemap(tilemap`level1`)
    game.splash("¡BIENVENIDO AL NIVEL 3!")
    info.startCountdown(120)
    for (let extra of sprites.allOfKind(SpriteKind.Enemy)) {
        extra.destroy()
    }
    for (let extra2 of sprites.allOfKind(SpriteKind.bonus)) {
        extra2.destroy()
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`miMosaico2`, function (sprite, location) {
    sprites.destroy(carminitas)
    sprites.destroy(carminitas)
    sprites.destroy(gatitaliens2)
    sprites.destroy(gatitaliens2)
    sprites.destroy(romas)
    sprites.destroy(romas)
})
sprites.onOverlap(SpriteKind.bonus, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 200)
    info.stopCountdown()
    game.setGameOverEffect(false, effects.smiles)
    music.stopAllSounds()
    game.gameOver(false)
    music.play(music.stringPlayable("A E G E D D F - ", 120), music.PlaybackMode.UntilDone)
})
function pantallainicio () {
    tiles.setCurrentTilemap(tilemap`level1`)
    game.splash("SUPER GATITALIENS", "Presiona A para comenzar")
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (juegoIniciado == false) {
            juegoIniciado = true
            nivel = 1 
            tiles.setCurrentTilemap(tilemap`level1`)
            game.showLongText("¡Sobrevive!", DialogLayout.Bottom)
        }
    })
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`miMosaico0`, function (sprite, location) {
    sprites.destroy(carminitas)
    sprites.destroy(carminitas)
    sprites.destroy(gatitaliens2)
    sprites.destroy(gatitaliens2)
    sprites.destroy(romas)
    sprites.destroy(romas)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    sprite.destroy()
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bonus, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(500)
})
let posicionY2 = 0
let posicionX2 = 0
let romas: Sprite = null
let gatitaliens2: Sprite = null
let carminitas: Sprite = null
let projectile2: Sprite = null
let nivel2 = 0
let jugador: Sprite = null
let nivel4 = 0
let juegoIniciado3 = false
let posicionX = 0
let posicionY = 0
let titulo = null
let instruccion = null
let juegoIniciado2 = false
let nivel3 = 0
let juegoIniciado = false
let nivel = 0
let GENERADOR_DE_GATOALIENS = true
let generador_de_romas = true
music.play(music.createSong(hex`0078000408010305001c000f0a006400f4010a00000400000000000000000000000000000000020c0008000c00012c1c002000012c06001c00010a006400f401640000040000000000000000000000000000000002320000000400021b2c04000800011b08000c00011b0c001000011b10001400021b2c14001800011b18001c00011b1c002000011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80028000000010002040904000500010608000900010610001100020408180019000204091c001d00020208`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
    ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
    fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
    ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbb3bbbbbbbbccccccccccccccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
    dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
    dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
    ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
    ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
    ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
    d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
    333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
    33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
jugador = sprites.create(assets.image`player`, SpriteKind.Player)
jugador.setPosition(79, 25)
controller.moveSprite(jugador, 140, 140)
info.startCountdown(60)
game.setGameOverScoringType(game.ScoringType.HighScore)
nivel2 = 1
jugador.setStayInScreen(true)
game.setDialogFrame(img`
    ...cc......................cc....
    ..c55c..bbbb...bbbbb......c55c...
    .cb55bcbdddbbbbbdddbbbbbbcb55bc..
    b555555bbdddb111bdddb11db555555b.
    bb5555bbdbdb11111bdb1111bb5555bb.
    cb5555bcddd11111ddd11111cb5555bc.
    .c5bb5c1111d111d111d111ddc5bb5c..
    .cbbbbc111111111111111111cbbbbc..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdb1d111111111111111111111111b..
    .bb111d11111111111111111111111b..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdbb1111111111111111111111111b..
    .bbbd1111111111111111111111111b..
    ..bcc111111111111111111111dccdb..
    ..c55c111d111d111d111d1111c55cb..
    .cb55bcdd11111ddd11111dddcb55bc..
    b555555b11111bdb11111bdbb555555b.
    bb5555bbb111bdddb111bdddbb5555bb.
    cb5555bcdbbbbbdddbbbbbddcb5555bc.
    .c5bb5c.bb...bbbbb...bbbbc5bb5c..
    .cbbbbc..................cbbbbc..
    .................................
    `)
game.showLongText("presione A para comenzar ", DialogLayout.Bottom)
game.setDialogTextColor(9)
game.onUpdateInterval(2000, function () {
    if (GENERADOR_DE_GATOALIENS) {
        if (nivel2 == 1) {
            romas = sprites.create(img`
                . . . . . 5 . . . . . . 
                . . . . 5 9 5 . . . . . 
                . . . 5 9 f 9 5 . . . . 
                . . 5 9 f 2 f 9 5 . . . 
                . 5 9 f 3 2 3 f 9 5 . . 
                5 9 f 2 2 2 2 2 f 9 5 . 
                . 5 9 f 3 2 3 f 9 5 . . 
                . . 5 9 f 2 f 9 5 . . . 
                . . . 5 9 f 9 5 . . . . 
                . . . . 5 9 5 . . . . . 
                . . . . . 5 . . . . . . 
                . . . . . . . . . . . . 
                `, SpriteKind.bonus)
            romas.setPosition(randint(10, 150), 120)
            romas.vy = -80
            romas.setFlag(SpriteFlag.AutoDestroy, true)
        } else if (nivel2 == 2) {
            carminitas = sprites.create(img`
                . . 3 5 5 5 5 5 5 5 3 . 
                . . 5 3 7 7 5 7 7 3 5 . 
                . . 5 7 3 7 5 7 3 7 5 . 
                . . 5 7 7 3 5 3 7 7 5 . 
                . . 5 5 5 5 3 5 5 5 5 . 
                . . 5 7 7 3 5 3 7 7 5 . 
                . . 5 7 3 7 5 7 3 7 5 . 
                . . 5 3 7 7 5 7 7 3 5 . 
                . . 3 5 5 5 5 5 5 5 3 . 
                . . . . . . . . . . . . 
                `, SpriteKind.bonus)
            posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
            posicionY2 = scene.cameraTop() + 120
            carminitas.setPosition(posicionX2, posicionY2)
            carminitas.vy = -90
            carminitas.setFlag(SpriteFlag.AutoDestroy, true)
            carminitas.setStayInScreen(false)
        } else if (nivel2 == 3) {
            carminitas = sprites.create(img`
                f f f f f f f f f f f f 
                f 7 f 7 7 7 7 7 7 f 7 f 
                f 9 9 f 9 9 9 9 f 9 9 f 
                f 7 9 1 f 1 1 f 1 9 7 f 
                f 7 9 1 1 f f 1 1 9 7 f 
                f 7 9 1 1 f f 1 1 9 7 f 
                f 7 9 1 f 1 1 f 1 9 7 f 
                f 9 9 f 9 9 9 9 f 9 9 f 
                f 7 f 7 7 7 7 7 7 f 7 f 
                f f f f f f f f f f f f 
                `, SpriteKind.bonus)
            posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
            posicionY2 = scene.cameraTop() + 120
            carminitas.setPosition(posicionX2, posicionY2)
            carminitas.vy = -95
            carminitas.setStayInScreen(true)
            carminitas.setFlag(SpriteFlag.AutoDestroy, false)
        } else if (false) {
        	
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (GENERADOR_DE_GATOALIENS) {
        if (nivel2 == 1) {
            romas = sprites.create(img`
                . . . . . 5 . . . . . . 
                . . . . 5 9 5 . . . . . 
                . . . 5 9 f 9 5 . . . . 
                . . 5 9 f 2 f 9 5 . . . 
                . 5 9 f 3 2 3 f 9 5 . . 
                5 9 f 2 2 2 2 2 f 9 5 . 
                . 5 9 f 3 2 3 f 9 5 . . 
                . . 5 9 f 2 f 9 5 . . . 
                . . . 5 9 f 9 5 . . . . 
                . . . . 5 9 5 . . . . . 
                . . . . . 5 . . . . . . 
                . . . . . . . . . . . . 
                `, SpriteKind.bonus)
            romas.setPosition(randint(10, 150), 120)
            romas.vy = -80
            romas.setFlag(SpriteFlag.AutoDestroy, true)
        } else if (nivel2 == 2) {
            carminitas = sprites.create(img`
                . . 3 5 5 5 5 5 5 5 3 . 
                . . 5 3 7 7 5 7 7 3 5 . 
                . . 5 7 3 7 5 7 3 7 5 . 
                . . 5 7 7 3 5 3 7 7 5 . 
                . . 5 5 5 5 3 5 5 5 5 . 
                . . 5 7 7 3 5 3 7 7 5 . 
                . . 5 7 3 7 5 7 3 7 5 . 
                . . 5 3 7 7 5 7 7 3 5 . 
                . . 3 5 5 5 5 5 5 5 3 . 
                . . . . . . . . . . . . 
                `, SpriteKind.bonus)
            posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
            posicionY2 = scene.cameraTop() + 120
            carminitas.setPosition(posicionX2, posicionY2)
            carminitas.vy = -90
            carminitas.setFlag(SpriteFlag.AutoDestroy, true)
            carminitas.setStayInScreen(false)
        } else if (nivel2 == 3) {
            carminitas = sprites.create(img`
                f f f f f f f f f f f f 
                f 7 f 7 7 7 7 7 7 f 7 f 
                f 9 9 f 9 9 9 9 f 9 9 f 
                f 7 9 1 f 1 1 f 1 9 7 f 
                f 7 9 1 1 f f 1 1 9 7 f 
                f 7 9 1 1 f f 1 1 9 7 f 
                f 7 9 1 f 1 1 f 1 9 7 f 
                f 9 9 f 9 9 9 9 f 9 9 f 
                f 7 f 7 7 7 7 7 7 f 7 f 
                f f f f f f f f f f f f 
                `, SpriteKind.bonus)
            posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
            posicionY2 = scene.cameraTop() + 120
            carminitas.setPosition(posicionX2, posicionY2)
            carminitas.vy = -95
            carminitas.setFlag(SpriteFlag.AutoDestroy, true)
            carminitas.setStayInScreen(false)
        } else if (false) {
        	
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (GENERADOR_DE_GATOALIENS) {
        if (nivel2 == 1) {
            gatitaliens2 = sprites.create(img`
                . . . . . . . . . . . . 
                . 7 7 7 . . 7 7 7 . . . 
                . 7 7 7 . . 7 7 7 . . . 
                . . 7 . . . . 7 . . . . 
                . . 7 7 7 7 7 7 . . . . 
                . 7 f f 7 7 f f 7 . . . 
                . 7 7 f 7 7 f 7 7 . . . 
                . 7 7 7 7 7 7 7 7 . . . 
                . . 7 7 f 7 7 7 . . . . 
                . . . 7 7 7 7 . . . . . 
                `, SpriteKind.Enemy)
            gatitaliens2.setPosition(randint(10, 150), 120)
            gatitaliens2.vy = -75
            gatitaliens2.setFlag(SpriteFlag.AutoDestroy, true)
        } else if (nivel2 == 2) {
            carminitas = sprites.create(img`
                . . . . . . . . . . . . 
                . 8 8 8 . . 8 8 8 . . . 
                . 8 8 8 . . 8 8 8 . . . 
                . . 8 . . . . 8 . . . . 
                . . 8 8 8 8 8 8 . . . . 
                . 8 f f 8 8 f f 8 . . . 
                . 8 8 f 8 8 f 8 8 . . . 
                . 8 2 8 8 8 8 2 8 . . . 
                . . 8 8 f 8 8 8 . . . . 
                . . . 8 8 8 8 . . . . . 
                `, SpriteKind.Enemy)
            posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
            posicionY2 = scene.cameraTop() + 120
            carminitas.setPosition(posicionX2, posicionY2)
            carminitas.vy = -85
            carminitas.setFlag(SpriteFlag.AutoDestroy, true)
            carminitas.setStayInScreen(false)
        } else if (nivel2 == 3) {
            carminitas = sprites.create(img`
                . . . . . . . . . . . . 
                1 1 . . 1 1 . . . . . . 
                1 1 1 1 1 1 . . . . . . 
                . 1 5 5 1 . . . . . . . 
                . 1 5 5 1 1 . . . . . . 
                1 1 1 7 1 1 . . . . . . 
                1 1 . 7 7 7 . . . . . . 
                . . . . . 7 . . . . . . 
                . . . . . 7 . . . . . . 
                . . . . 7 7 . . . . . . 
                `, SpriteKind.bonus)
            posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
            posicionY2 = 0
            carminitas.setPosition(posicionX2, posicionY2)
            carminitas.vy = -90
            carminitas.setFlag(SpriteFlag.AutoDestroy, true)
            carminitas.setStayInScreen(false)
        } else if (false) {
        	
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (nivel2 == 1) {
        gatitaliens2 = sprites.create(img`
            . . . . . . . . . . . . 
            . 7 7 7 . . 7 7 7 . . . 
            . 7 7 7 . . 7 7 7 . . . 
            . . 7 . . . . 7 . . . . 
            . . 7 7 7 7 7 7 . . . . 
            . 7 f f 7 7 f f 7 . . . 
            . 7 7 f 7 7 f 7 7 . . . 
            . 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 f 7 7 7 . . . . 
            . . . 7 7 7 7 . . . . . 
            `, SpriteKind.Enemy)
        gatitaliens2.setPosition(randint(10, 150), 120)
        gatitaliens2.vy = -75
        gatitaliens2.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (nivel2 == 2) {
        carminitas = sprites.create(img`
            . . . . . . . . . . . . 
            . 8 8 8 . . 8 8 8 . . . 
            . 8 8 8 . . 8 8 8 . . . 
            . . 8 . . . . 8 . . . . 
            . . 8 8 8 8 8 8 . . . . 
            . 8 f f 8 8 f f 8 . . . 
            . 8 8 f 8 8 f 8 8 . . . 
            . 8 2 8 8 8 8 2 8 . . . 
            . . 8 8 f 8 8 8 . . . . 
            . . . 8 8 8 8 . . . . . 
            `, SpriteKind.Enemy)
        posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
        posicionY2 = scene.cameraTop() + 120
        carminitas.setPosition(posicionX2, posicionY2)
        carminitas.vy = -85
        carminitas.setFlag(SpriteFlag.AutoDestroy, true)
        carminitas.setStayInScreen(false)
    } else if (nivel2 == 3) {
        carminitas = sprites.create(img`
            . . . . . . . . . . . . 
            1 1 . . 1 1 . . . . . . 
            1 1 1 1 1 1 . . . . . . 
            . 1 5 5 1 . . . . . . . 
            . 1 5 5 1 1 . . . . . . 
            1 1 1 7 1 1 . . . . . . 
            1 1 . 7 7 7 . . . . . . 
            . . . . . 7 . . . . . . 
            . . . . . 7 . . . . . . 
            . . . . 7 7 . . . . . . 
            `, SpriteKind.bonus)
        posicionX2 = randint(scene.cameraLeft() + 10, scene.cameraLeft() + 150)
        posicionY2 = scene.cameraTop() + 120
        carminitas.setPosition(posicionX2, posicionY2)
        carminitas.vy = -90
        carminitas.setFlag(SpriteFlag.AutoDestroy, true)
        carminitas.setStayInScreen(false)
    } else if (false) {
    	
    }
})
