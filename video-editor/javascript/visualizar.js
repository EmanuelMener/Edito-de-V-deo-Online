// visualizar.js

function getVideoUrl(videoId) {
    const video = JSON.parse(localStorage.getItem(videoId));
    if (video) {
      return URL.createObjectURL(video);
    }
    return null;
  }
  
  function loadVideoFromStorage() {
    const videoPlayer = document.querySelector('#video-player');
    const videoUrl = getVideoUrl('video');
    if (videoUrl) {
      videoPlayer.src = videoUrl;
    } else {
      alert('Erro ao carregar o vídeo.');
    }
  }
  
  loadVideoFromStorage();
  