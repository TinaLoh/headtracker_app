(function() {
  var laserSound;
  laserSound = document.createElement("audio");
  document.body.appendChild(laserSound);
  laserSound.setAttribute("src","audio.mp3");

  window.addEventListener("keydown",onKeyDown);


  function onKeyDown(e){
    switch (e.keyCode) {
      //Z
      case 90:
        laserSound.play()
        break;
        //X
        case 88:
          break;
          //C
          case 67:
            break;
    }
  }

  var headtrack = document.getElementById("values");
  var facetrack = document.getElementById("values2");
  var inputCanvas= document.getElementById('inputCanvas');
  var htracker = new headtrackr.Tracker();
  htracker.init(inputVideo, inputCanvas);
  htracker.start();


  document.addEventListener("headtrackingEvent", function(event) {
    headtrack.textContent = ("x: "+event.x +" y:"+ event.y+ " z:"+ event.z)
  });
  var factrackingEvent = function(event) {
    laserSound.play()
    facetrack.textContent = ("x: "+event.x +" y: "+ event.y+" width:"+ event.width +" height:"+ event.height+" angle:"+ event.angle);
  };
  document.addEventListener("facetrackingEvent", factrackingEvent);
}());
