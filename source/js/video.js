import { isEnterKey } from './util.js';

const playButton = document.querySelector('.about__play-button');
const videoContainer = document.querySelector('.about__video');

const videoUrl = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';

const uploadVideo = () => {
  const iframe = document.createElement('iframe');
  iframe.classList.add('about__iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allowfullscreen', 'true');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('referrerpolicy', 'trict-origin-when-cross-origin');
  iframe.setAttribute('title', 'YouTube video player');

  videoContainer.innerHTML = '';
  videoContainer.appendChild(iframe);
};

playButton.addEventListener('click', uploadVideo);

playButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    uploadVideo();
  }
});
