@namespace
class SpriteKind:
    object2 = SpriteKind.create()
    jumpscare = SpriteKind.create()

def on_on_overlap(sprite2, otherSprite2):
    global jump_times, need_to_die, jumpscares, will_die
    music.play(music.melody_playable(music.small_crash),
        music.PlaybackMode.UNTIL_DONE)
    jumpscare2.scale = 10
    jumpscare2.set_position(80, 60)
    jumpscare2.set_position(jumpscare2.x - jumpscare2.width / 2,
        jumpscare2.y - jumpscare2.height / 2)
    jumpscare2.z = 0
    ghost.set_image(img("""
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
    """))
    jump_dot.set_image(img("""
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
    """))
    point_score.set_image(img("""
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
    """))
    jump_times = randint(1, 4)
    if jump_times == info.life():
        jump_times = jump_times + 1
        need_to_die = 1
    pause(randint(800, 2400))
    for index in range(jump_times):
        jumpscares += 1
        jumpscare2.set_image(img("""
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
        """))
        music.play(music.melody_playable(music.big_crash),
            music.PlaybackMode.UNTIL_DONE)
        pause(500)
        jumpscare2.set_image(img("""
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
        """))
        pause(randint(700, 1500))
    if need_to_die == 1:
        will_die = 1
    jump_dot.set_position(randint(20, 140), randint(20, 100))
    while True:
        if ghost.overlaps_with(jump_dot):
            jump_dot.set_position(randint(20, 140), randint(20, 100))
        else:
            break
    point_score.set_position(randint(20, 140), randint(20, 100))
    while True:
        if ghost.overlaps_with(point_score):
            point_score.set_position(randint(20, 140), randint(20, 100))
        else:
            break
    if jump_dot.overlaps_with(point_score):
        point_score.set_position(randint(20, 140), randint(20, 100))
        jump_dot.set_position(randint(20, 140), randint(20, 100))
    ghost.set_image(img("""
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
    """))
    point_score.set_image(assets.image("""
        pad
    """))
    jump_dot.set_image(assets.image("""
        pad
    """))
    info.change_life_by(0 - jump_times)
sprites.on_overlap(SpriteKind.player, SpriteKind.object2, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    music.play(music.melody_playable(music.small_crash),
        music.PlaybackMode.UNTIL_DONE)
    ghost.set_image(img("""
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
    """))
    jump_dot.set_image(img("""
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
    """))
    point_score.set_image(img("""
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
    """))
    jump_dot.set_position(randint(20, 140), randint(20, 100))
    while True:
        if ghost.overlaps_with(jump_dot):
            jump_dot.set_position(randint(20, 140), randint(20, 100))
        else:
            break
    point_score.set_position(randint(20, 140), randint(20, 100))
    while True:
        if ghost.overlaps_with(point_score):
            point_score.set_position(randint(20, 140), randint(20, 100))
        else:
            break
    if jump_dot.overlaps_with(point_score):
        point_score.set_position(randint(20, 140), randint(20, 100))
        jump_dot.set_position(randint(20, 140), randint(20, 100))
    pause(randint(800, 2400))
    ghost.set_image(img("""
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
    """))
    jump_dot.set_image(assets.image("""
        pad
    """))
    point_score.set_image(assets.image("""
        pad
    """))
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

jumpscares = 0
jump_times = 0
jumpscare2: Sprite = None
point_score: Sprite = None
jump_dot: Sprite = None
ghost: Sprite = None
need_to_die = 0
will_die = 0
will_die = 0
need_to_die = 0
username = game.ask_for_string("ENTER USERNAME:")
game.show_long_text("You are a ghost that is alive. There is a dot and if you overlap it, things will go dark. Then you will score a point. However, there is another one which will seem to do the same thing, but, it will actually do something else! Let's just say that your hearts will fall out. Lose all ten lives and you DIE",
    DialogLayout.BOTTOM)
info.set_score(0)
info.set_life(10)
ghost = sprites.create(img("""
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
    """),
    SpriteKind.player)
jump_dot = sprites.create(assets.image("""
    pad
"""), SpriteKind.object2)
jump_dot.set_position(randint(20, 140), randint(20, 100))
while True:
    if ghost.overlaps_with(jump_dot):
        jump_dot.set_position(randint(20, 140), randint(20, 100))
    else:
        break
point_score = sprites.create(assets.image("""
    pad
"""), SpriteKind.food)
point_score.set_position(randint(20, 140), randint(20, 100))
while True:
    if ghost.overlaps_with(point_score):
        point_score.set_position(randint(20, 140), randint(20, 100))
    else:
        break
if jump_dot.overlaps_with(point_score):
    point_score.set_position(randint(20, 140), randint(20, 100))
    jump_dot.set_position(randint(20, 140), randint(20, 100))
jumpscare2 = sprites.create(img("""
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
    """),
    SpriteKind.jumpscare)
ghost.set_stay_in_screen(True)
controller.move_sprite(ghost)

def on_forever():
    if will_die == 1:
        if username == "undefined":
            game.splash("The jumpscrares made you jump so high, you jumped to the reaper. You scored " + ("" + str(info.score())) + " points when you hit the sack. R.I.P. This is your eulogy: Player known as " + "Unknown" + " was an alive ghost who died from jumping to the grim reaper by getting jumpscared " + ("" + str(jumpscares)) + " times. GAME COMPLETE....?.......")
        else:
            game.splash("The jumpscrares made you jump so high, you jumped to the reaper. You scored " + ("" + str(info.score())) + " points when you hit the sack. R.I.P. This is your eulogy: Player known as " + username + " was an alive ghost who died from jumping to the grim reaper by getting jumpscared " + ("" + str(jumpscares)) + " times. GAME COMPLETE....?.......")
        game.splash("If this project wins, I will make a part two")
forever(on_forever)
