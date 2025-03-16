import { isEnterKey } from './util.js';

const playButton = document.querySelector('.about__play-button');
const videoContainer = document.querySelector('.about__video');

const videoUrl = 'https://www.youtube.com/embed/watch?v=9TZXsZItgdw?autoplay=1';

const uploadVideo = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allowfullscreen', 'true');
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  videoContainer.innerHTML = '';
  videoContainer.appendChild(iframe);
};

playButton.addEventListener('click', uploadVideo);

playButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    uploadVideo();
  }
});
