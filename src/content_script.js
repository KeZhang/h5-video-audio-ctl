var TYPE;

const getDefaultPlayerType = function () {
  if ($('audio').length > 0) {
    type = 'audio'
  } else if ($('video').length > 0) {
    type = 'video'
  }
  return type
}

document.addEventListener("keyup", function (e) {

  if (e.altKey) {

    TYPE = getDefaultPlayerType();

    if (e.code === 'KeyA') {
      TYPE = "audio"
    } else if (e.code === 'KeyV') {
      TYPE = "video"
    }

    const player = $(TYPE)[0];

    if (e.code == "KeyS") {

      player.controls = !player.controls

      if (player.controls) {
        console.log(`
        **********************************************
        * Welcome to use h5 video/audio controller
        
        Alt + S   :   show / hide the control bar, when show start to control, hide to stop control
        Alt + 1   :   play x1
        Alt + 2   :   play x1.5
        Alt + 3   :   play x2
        
        > (ArrowRight) : +10s
        < (ArrowLeft)  : -10s
        Alt + > (ArrowRight) : +30s
        Alt + < (ArrowLeft)  : -30s
        
        **********************************************
        `)
      }

    } else if (e.code == "Space") {

      player.paused ? player.play() : player.pause()

    } else if (e.code == "Digit1") {

      player.playbackRate = 1

    } else if (e.code == "Digit2") {

      player.playbackRate = 1.5

    } else if (e.code == "Digit3") {

      player.playbackRate = 2

    }

    // console.log(`Player (${TYPE}) speed  ${player.playbackRate }`)

  }

})

// forward or backward
document.addEventListener("keydown", function (e) {


  TYPE = getDefaultPlayerType();


  const player = $(TYPE)[0];
  const step = e.altKey ? 30 : 10;

  if (e.code == "ArrowRight") {

    player.currentTime += step

  } else if (e.code == "ArrowLeft") {

    player.currentTime -= step

  }

})