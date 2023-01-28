const DRUMKIT_SELECTOR = '.drumkit__audio--';

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


function getEl(button) {
    return document.querySelector(DRUMKIT_SELECTOR + button);
}

function playAudio(drumsetPart) {
    if (typeof drumsetPart !== 'undefined') {
        drumsetPart.pause();
        drumsetPart.currentTime = 0;
        drumsetPart.play();
    }
}

function buttonHandle(event) {
    let button = buttonMap[event.key];
    if (typeof button === 'undefined') return false;

    let drumsetPart = getEl(button);
    playAudio(drumsetPart);
}

document.addEventListener('keydown', buttonHandle);