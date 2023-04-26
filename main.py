def on_button_pressed_a():
    global Index
    Index += -1
    if Index < 0:
        Index = len(Objects) - 1
    Objects[Index].show_image(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Index
    Index += 1
    if Index == len(Objects):
        Index = 0
    Objects[Index].show_image(0)
input.on_button_pressed(Button.B, on_button_pressed_b)

Objects: List[Image] = []
Index = 0
Index = 0
Objects = [images.create_image("""
        . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
    """),
    images.create_image("""
        . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
    """),
    images.create_image("""
        . . . . .
            . . # # .
            . . # # .
            . . # . .
            . . . . .
    """),
    images.create_image("""
        . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
    """),
    images.create_image("""
        . . . . .
            . # # . .
            . . # . .
            . . # . .
            . . . . .
    """)]

def on_forever():
    for y in range(5):
        led.plot(0, y)
    for y2 in range(5):
        led.plot(4, y2)
    for x in range(5):
        led.plot(x, 0)
    for x2 in range(5):
        led.plot(x2, 4)
basic.forever(on_forever)
