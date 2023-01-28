const DRUMKIT_SELECTOR = '.drumkit__audio--';
const DRUMKIT_ACTIVE_CLASS = 'drumkit__button--active';

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


function getEl(selector) {
    return document.querySelector(selector);
}

function playAudio(drumkitPart) {
    if (typeof drumkitPart !== 'undefined') {
        drumkitPart.pause();
        drumkitPart.currentTime = 0;
        drumkitPart.play();
    }
}

function scale(element) {
    console.log(element);
    console.log(element.querySelector('kbd'));
    // element.querySelector('kbd').classList.add(DRUMKIT_ACTIVE_CLASS);
}

function buttonHandle(event) {
    let button = buttonMap[event.key];
    if (typeof button === 'undefined') return false;

    let drumkitPart = ;
    playAudio(getEl(DRUMKIT_SELECTOR + button));
    scale(getEl);
}

document.addEventListener('keydown', buttonHandle);