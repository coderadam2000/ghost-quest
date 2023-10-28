namespace SpriteKind {
    export const object2 = SpriteKind.create()
    export const jumpscare = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object2, function (sprite2, otherSprite2) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    jumpscare2.scale = 10
    jumpscare2.setPosition(80, 60)
    jumpscare2.setPosition(jumpscare2.x - jumpscare2.width / 2, jumpscare2.y - jumpscare2.height / 2)
    jumpscare2.z = 0
    ghost.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    jump_dot.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    point_score.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    jump_times = randint(1, 4)
    if (jump_times == info.life()) {
        jump_times = jump_times + 1
        need_to_die = 1
    }
    pause(randint(800, 2400))
    for (let index = 0; index < jump_times; index++) {
        jumpscares += 1
        jumpscare2.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .....fffc1111111f.......
            ...fc111cd1111111f......
            ...f1b1b1b1111dddf......
            ...fbfbffcf11fcddf......
            ......fcf111111bbf......
            .......ccbdb1b1fcf......
            .......fffbfbfdff.......
            ........ffffffff........
            ........fffffffffff.....
            .........fffffc111cf....
            .........fffff1b1b1f....
            ..........ffffbfbfbf....
            ...........ffff.........
            ........................
            ........................
            ........................
            `)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(500)
        jumpscare2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(randint(700, 1500))
    }
    if (need_to_die == 1) {
        will_die = 1
    }
    jump_dot.setPosition(randint(20, 140), randint(20, 100))
    while (true) {
        if (ghost.overlapsWith(jump_dot)) {
            jump_dot.setPosition(randint(20, 140), randint(20, 100))
        } else {
            break;
        }
    }
    point_score.setPosition(randint(20, 140), randint(20, 100))
    while (true) {
        if (ghost.overlapsWith(point_score)) {
            point_score.setPosition(randint(20, 140), randint(20, 100))
        } else {
            break;
        }
    }
    if (jump_dot.overlapsWith(point_score)) {
        point_score.setPosition(randint(20, 140), randint(20, 100))
        jump_dot.setPosition(randint(20, 140), randint(20, 100))
    }
    ghost.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        1 1 . 1 1 . . 1 1 . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    point_score.setImage(assets.image`pad`)
    jump_dot.setImage(assets.image`pad`)
    info.changeLifeBy(0 - jump_times)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    ghost.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    jump_dot.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    point_score.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    jump_dot.setPosition(randint(20, 140), randint(20, 100))
    while (true) {
        if (ghost.overlapsWith(jump_dot)) {
            jump_dot.setPosition(randint(20, 140), randint(20, 100))
        } else {
            break;
        }
    }
    point_score.setPosition(randint(20, 140), randint(20, 100))
    while (true) {
        if (ghost.overlapsWith(point_score)) {
            point_score.setPosition(randint(20, 140), randint(20, 100))
        } else {
            break;
        }
    }
    if (jump_dot.overlapsWith(point_score)) {
        point_score.setPosition(randint(20, 140), randint(20, 100))
        jump_dot.setPosition(randint(20, 140), randint(20, 100))
    }
    pause(randint(800, 2400))
    ghost.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        1 1 . 1 1 . . 1 1 . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    jump_dot.setImage(assets.image`pad`)
    point_score.setImage(assets.image`pad`)
    info.changeScoreBy(1)
})
let jumpscares = 0
let jump_times = 0
let jumpscare2: Sprite = null
let point_score: Sprite = null
let jump_dot: Sprite = null
let ghost: Sprite = null
let need_to_die = 0
let will_die = 0
will_die = 0
need_to_die = 0
let username = game.askForString("ENTER USERNAME:")
game.showLongText("You are a ghost that is alive. There is a dot and if you overlap it, things will go dark. Then you will score a point. However, there is another one which will seem to do the same thing, but, it will actually do something else! Let's just say that your hearts will fall out. Lose all ten lives and you DIE", DialogLayout.Bottom)
info.setScore(0)
info.setLife(10)
ghost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    1 1 . 1 1 . . 1 1 . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
jump_dot = sprites.create(assets.image`pad`, SpriteKind.object2)
jump_dot.setPosition(randint(20, 140), randint(20, 100))
while (true) {
    if (ghost.overlapsWith(jump_dot)) {
        jump_dot.setPosition(randint(20, 140), randint(20, 100))
    } else {
        break;
    }
}
point_score = sprites.create(assets.image`pad`, SpriteKind.Food)
point_score.setPosition(randint(20, 140), randint(20, 100))
while (true) {
    if (ghost.overlapsWith(point_score)) {
        point_score.setPosition(randint(20, 140), randint(20, 100))
    } else {
        break;
    }
}
if (jump_dot.overlapsWith(point_score)) {
    point_score.setPosition(randint(20, 140), randint(20, 100))
    jump_dot.setPosition(randint(20, 140), randint(20, 100))
}
jumpscare2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.jumpscare)
ghost.setStayInScreen(true)
controller.moveSprite(ghost)
forever(function () {
    if (will_die == 1) {
        if (username == "undefined") {
            game.splash("The jumpscrares made you jump so high, you jumped to the reaper. You scored " + ("" + info.score()) + " points when you hit the sack. R.I.P. This is your eulogy: Player known as " + "Unknown" + " was an alive ghost who died from jumping to the grim reaper by getting jumpscared " + ("" + jumpscares) + " times. GAME COMPLETE....?.......")
        } else {
            game.splash("The jumpscrares made you jump so high, you jumped to the reaper. You scored " + ("" + info.score()) + " points when you hit the sack. R.I.P. This is your eulogy: Player known as " + username + " was an alive ghost who died from jumping to the grim reaper by getting jumpscared " + ("" + jumpscares) + " times. GAME COMPLETE....?.......")
        }
        game.splash("If this project wins, I will make a part two")
    }
})
