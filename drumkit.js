let buttonMap = {
    e: 'crash',
    r: 'ride',
    i: 'open-hihat',
    k: 'closed-hihat',
    f: 'floor-tom',
    g: 'mid-tom',
    h: 'high-tom',
    j: 'snare',
    v: 'kick',
    b: 'kick'
};

function playAudio(event) {
    if(typeof buttonMap[event.key] === 'undefined') return false;
    let selector = '.drumkit__audio--' + buttonMap[event.key];
    let drumsetPart = document.querySelector(selector);

    if(typeof drumsetPart !== 'undefined') {
        drumsetPart.pause();
        drumsetPart.currentTime = 0;
        drumsetPart.play();
    }
}
document.addEventListener('keydown', playAudio);