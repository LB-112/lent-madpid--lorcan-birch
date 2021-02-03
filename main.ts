sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccccccccccccccccccccccccccccccccccccccc
    fffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44cccccccccccccccccccccccccccccccccccccccccccc
    ffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffff4ccccccccccccccccccccccccccccccccccccccccccc
    ffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666661fffffffffffffffffffffffffff44ccccccccccccccccccccccccccccccccccccccccc
    fff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11666666666666611fffffffffffffffffffffffffff4cccccccccccccccccccccccccccccccccccccccc
    f44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666661fffffffffffffffffffffffffff44cccccccccccccccccccccccccccccccccccccc
    4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166666666666666666661ffffffffffffffffffffffffffff4ccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166666666666666666661fffffffffffffffffffffffffffff4cccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16666666666666666666661fffffffffffffffffffffffffffff4ccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661fffffffffffffffffffffffffffff4cccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661ffffffffffffffffffffffffffffff44cccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661ffffffffffffffffffffffffffffffff4ccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661fffffffffffffffffffffffffffffffff4cccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661ffffffffffffffffffffffffffffffffff4ccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661fffffffffffffffffffffffffffffffffff4cccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661ffffffffffffffffffffffffffffffffffff4ccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661fffffffffffffffffffffffffffffffffffff4cccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661ffffffffffffffffffffffffffffffffffffff4ccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661fffffffffffffffffffffffff1111111fffffff4cccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666666666661ffffffffffffffffffffffff155555551fffffff4ccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16666666666666666666661ffffffffffffffffffffffff15555555551ffffff4ccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166666666666666666661ffffffffffffffffffffffff1555555555551ffffff4cccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166666666666666666661ffffffffffffffffffffffff1555555555551fffffff4ccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1666666666666666661fffffffffffffffffffffffff1555555555551ffffffff4cccccccccccccccccccc
    fffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffff11666666666666611ffffffffffffffffffffffffff1555555555551fffffffff4ccccccccccccccccccc
    fffffffffffffffffffffffffff118888888888811fffffffffffffffffffffffffffffffffff1666666666661ffffffffffffffffffffffffffff1555555555551ffffffffff4cccccccccccccccccc
    fffffffffffffffffffffffff1188888888888888811ffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffff1555555555551ffffffffff4cccccccccccccccccc
    ffffffffffffffffffffffff188888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1555555555551fffffffffff4ccccccccccccccccc
    fffffffffffffffffffffff18888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff15555555551fffffffffffff4cccccccccccccccc
    ffffffffffffffffffffff1888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff155555551ffffffffffffff4cccccccccccccccc
    fffffffffffffffffffff188888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffff4ccccccccccccccc
    fffffffffffffffffffff188888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccccccc
    ffffffffffffffffffff18888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccccccc
    ffffffffffffffffffff18888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccccccccc
    fffffffffffffffffff1888888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccccc
    fffffffffffffffffff1888888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccccc
    fffffffffffffffffff1888888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccccccc
    fffffffffffffffffff1888888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccccccc
    fffffffffffffffffff1888888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccc
    fffffffffffffffffff1888888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccccc
    fffffffffffffffffff1888888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccccc
    fffffffffffffffffff1888888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccccc
    fffffffffffffffffff1888888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccc
    fffffffffffffffffff1888888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccccc
    fffffffffffffffffff1888888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccc
    ffffffffffffffffffff18888888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccccc
    ffffffffffffffffffff18888888888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccc
    fffffffffffffffffffff188888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccc
    fffffffffffffffffffff188888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccccc
    ffffffffffffffffffffff1888888888888888888888881fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccc
    fffffffffffffffffffffff18888888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccccc
    ffffffffffffffffffffffff188888888888888888881ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccc
    fffffffffffffffffffffffff1188888888888888811fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccc
    fffffffffffffffffffffffffff118888888888811fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cccc
    fffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4cc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4c
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4c
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4c
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffff4c
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4c
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
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
    fffffffffffffffffffffffffffffffffff44444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff44444444444444444444e444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff44444444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff4444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff44444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeee.4444444444ffffffffffffffffffeeefffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffeefffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffefffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fff
    `)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . 6 9 . . . . . . . 
    . . . . . . . 6 9 9 9 . . . . . 
    . . . . . 9 9 6 9 8 9 9 9 . . . 
    . . . . . . 6 8 1 1 . . . . . . 
    . . . . . . 6 6 6 1 . . . . . . 
    . . . . . . 8 6 6 1 . . . . . . 
    . . . . . . 8 1 1 1 8 . . . . . 
    . . . . 8 8 8 . . . 8 . . . . . 
    . . . . . . . . . . 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
info.setLife(3)
let mySprite2 = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 4 4 4 2 2 2 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 5 5 4 4 4 5 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . b 5 5 5 b . . . . . . 
    . . . . . b b 1 b b . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, null, 200, 0)
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    mySprite3.setVelocity(100, 0)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 4 4 4 2 2 2 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 5 5 4 4 4 5 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . b 5 5 5 b . . . . . . 
        . . . . . b b 1 b b . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
