const videoContainer = document.querySelector('.video-container');
const playbtn = document.querySelector('.play-btn');
videoContainer.addEventListener('click', ()=>{
playbtn.remove();
videoContainer.remove();

    const videoEmbed= document.createElement('iframe');
    videoEmbed.classList.add('video-container');
    videoEmbed.classList.add('itVideo');

    
    videoEmbed.setAttribute('src', 'https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1');
    videoEmbed.setAttribute('title', 'youtube video');
    videoEmbed.setAttribute('allowfullscreen', true);
    videoEmbed.setAttribute('allow', 'autoplay');


    
   console.log(videoEmbed);
    document.querySelector('.exclusively-section').appendChild(videoEmbed);
   
});