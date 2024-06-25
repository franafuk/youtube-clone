document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        { title: 'Video 1', src: 'videos/video1.mp4' },
        { title: 'Video 2', src: 'videos/video2.mp4' },
    ];

    const videoList = document.getElementById('video-list');
    const videoPlayer = document.getElementById('video-player');

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.textContent = video.title;
        videoItem.onclick = () => {
            videoPlayer.innerHTML = `<video controls src="${video.src}" width="600"></video>`;
        };
        videoList.appendChild(videoItem);
    });
});
