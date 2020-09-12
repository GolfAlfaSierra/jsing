//get video element
let videoTag = document.querySelector('video');

//binding events to keys
addEventListener('keyup', (e) => {
    if (videoTag === null) {
        console.log('No Video Tag')
    } else {
        
        if (e.key === '>') {
            videoTag.playbackRate += 0.2;
            videoTag.playbackRate = parseFloat(videoTag.playbackRate.toFixed(2));
        }

        if (e.key === '<') {
            videoTag.playbackRate -= 0.2;
            parseFloat(videoTag.playbackRate.toFixed(2));
        }

        if (e.key === '}') {
            videoTag.playbackRate += 1;
            parseFloat(videoTag.playbackRate.toFixed(2));
        }

        if (e.key === '{') {
            videoTag.playbackRate -= 1;
            parseFloat(videoTag.playbackRate.toFixed(2));
        }

        if (e.key === '+') {
            videoTag.playbackRate = 1;
            parseFloat(videoTag.playbackRate.toFixed(2));
        }
        //preventing dummy outputs
        if (
            (e.key === '<') || (e.key === '>') ||
            (e.key === '{') || (e.key === '}') ||
            (e.key === '+')
        ) {
            console.log('playback is ' + videoTag.playbackRate)
        }

    }
})
