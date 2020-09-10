

// Función para revelar lightbox y agregar reproducción automática de YouTube
function revealVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1'; //adicionar el autoplay URL
  document.getElementById(div).style.display = 'block';
}


// Ocultar la caja y eliminar la reproducción automática de YouTube
function hideVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // remover el autoplay URL
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}