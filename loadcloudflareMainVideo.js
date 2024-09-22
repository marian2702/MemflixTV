var video = document.getElementById('customVideo');
var videoSrc = 'https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/f8619acbc95ad80055f77943f1d469e7/manifest/video.m3u8';

if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function() {
        video.play();
    });
}