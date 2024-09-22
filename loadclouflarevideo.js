var video = document.getElementById('my-video');
    var videoSrc = 'https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/f8619acbc95ad80055f77943f1d469e7/manifest/video.m3u8';

    // Load the video using HLS
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

    // Subtitles logic
    video.addEventListener('loadedmetadata', function() {
        var tracks = video.textTracks;

        // Automatically show the "Deutsch" subtitle track
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].label === "Deutsch") {
                tracks[i].mode = "showing"; // Show the German subtitles
            }
        }
    });

   
   
   
   
   
   
    const VideoBanner = document.getElementById('my-video');
    const MuteSound = document.getElementById('MuteVideo'); // Ensure this matches your HTML ID
    const UnmuteSound = document.getElementById('UnmuteVideo'); // Ensure this matches your HTML ID
    
     
    MuteSound.addEventListener('click', ()=>{
        MuteSound.style.display = 'none';
        UnmuteSound.style.display = 'block';
        VideoBanner.muted = false;
    });

    UnmuteSound.addEventListener('click', ()=>{
        UnmuteSound.style.display = 'none';
        MuteSound.style.display = 'block';
        VideoBanner.muted = true;
    });


            
            
