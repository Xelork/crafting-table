input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Index += -1
    if (Index < 0) {
        Index = Objects.length - 1
    }
    
    Objects[Index].showImage(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    Index += 1
    if (Index == Objects.length) {
        Index = 0
    }
    
    Objects[Index].showImage(0)
})
let Objects : Image[] = []
let Index = 0
Index = 0
Objects = [images.createImage(`
        . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
    `), images.createImage(`
        . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
    `), images.createImage(`
        . . . . .
            . . # # .
            . . # # .
            . . # . .
            . . . . .
    `), images.createImage(`
        . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
    `), images.createImage(`
        . . . . .
            . # # . .
            . . # . .
            . . # . .
            . . . . .
    `)]
basic.forever(function on_forever() {
    for (let y = 0; y < 5; y++) {
        led.plot(0, y)
    }
    for (let y2 = 0; y2 < 5; y2++) {
        led.plot(4, y2)
    }
    for (let x = 0; x < 5; x++) {
        led.plot(x, 0)
    }
    for (let x2 = 0; x2 < 5; x2++) {
        led.plot(x2, 4)
    }
})
