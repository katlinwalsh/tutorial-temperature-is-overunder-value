/**
 * If the temperature probe is warmer than 15 degrees Celsius, a happy tone will play. 
 * 
 * If the temperature probe is cooler than 15 degrees Celsius, a sad tone will play
 */
let Temperature = fwdSensors.temperature1.temperature()
/**
 * Modify & Create: Design a hot icon and a warm icon for the micro:bit display.
 */
basic.forever(function () {
    if (fwdSensors.temperature1.isPastThreshold(15, fwdEnums.OverUnder.Over)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    if (fwdSensors.temperature1.isPastThreshold(15, fwdEnums.OverUnder.Under)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
})
