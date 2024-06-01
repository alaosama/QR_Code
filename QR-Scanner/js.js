document.addEventListener("DOMContentLoaded", function() {
  let video = document.getElementById('videoElement');

  // Check if navigator supports mediaDevices
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        video.srcObject = stream;
      })
      .catch(function(error) {
        console.log("Something went wrong!");
      });
  }

  let scanner = new Instascan.Scanner({ video: video });

  scanner.addListener('scan', function(content) {
    alert('Scanned: ' + content);
  });

  Instascan.Camera.getCameras()
    .then(function(cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    })
    .catch(function(e) {
      console.error(e);
    });
});

