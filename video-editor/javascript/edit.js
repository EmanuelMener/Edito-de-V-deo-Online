const videoPlayer = document.querySelector('#videoPlayer');

// verifica se há um vídeo no localStorage
if (localStorage.getItem('video')) {
  const file = JSON.parse(localStorage.getItem('video'));
  const videoURL = URL.createObjectURL(file);
  videoPlayer.src = videoURL;
} else {
  alert('Nenhum vídeo foi carregado.');
  window.location.href = '../html/upload.html';
}

