var TYPE;

const getDefaultPlayerType = function() {
  if ($('audio').length > 0) {
    type = 'audio'
  } else if ($('video').length > 0) {
    type = 'video'
  }
  return type
}

document.addEventListener("keyup", function(e) {

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

    } else if (e.code == "Digit1") {

      player.playbackRate = 1

    } else if (e.code == "Digit2") {

      player.playbackRate = 1.5

    } else if (e.code == "Digit3") {

      player.playbackRate = 2

    }

    console.log(`Player (${TYPE}) speed  ${player.playbackRate }`)

  }


})