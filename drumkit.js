const DRUMKIT_AUDIO_SELECTOR = '.drumkit__audio--';
const DRUMKIT_BUTTON_SELECTOR = '.drumkit__button-';
const DRUMKIT_ACTIVE_CLASS = 'drumkit__button--active';

let buttonMap = {
    e: 'crash',
    r: 'ride',
    i: 'hihat-open',
    k: 'hihat-closed',
    f: 'floor-tom',
    g: 'mid-tom',
    h: 'high-tom',
    j: 'snare',
    v: 'left-kick',
    b: 'right-kick'
};


function getEl(selector) {
    return document.querySelector(selector);
}

function playAudio(drumkitPart) {
    if (typeof drumkitPart !== 'undefined') {
        // drumkitPart.pause();
        drumkitPart.currentTime = 0;
        drumkitPart.play();
    }
}

function scale(element) {
    if (element !== null) {
        element.classList.add(DRUMKIT_ACTIVE_CLASS);
        element.addEventListener('transitionend', function () {
            this.classList.remove(DRUMKIT_ACTIVE_CLASS);
        });
    }
}

function buttonHandle(event) {
    let button = buttonMap[event.key];
    if (typeof button === 'undefined') return false;

    playAudio(getEl(DRUMKIT_AUDIO_SELECTOR + button));
    scale(getEl(DRUMKIT_BUTTON_SELECTOR + button));
}

document.addEventListener('keydown', buttonHandle);