for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        if (i % 2 == j % 2) {
            led.plot(i, j)
            basic.pause(100)
        }
    }
}
basic.forever(function () {
	
})
