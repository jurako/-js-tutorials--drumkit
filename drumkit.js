const DRUMKIT_AUDIO_SELECTOR = '.drumkit__audio--';
const DRUMKIT_BUTTON_SELECTOR = '.drumkit__button-';
const DRUMKIT_ACTIVE_CLASS = '-active';

let buttonMap = {
    e: 'crash',
    r: 'ride',
    i: 'open-hihat',
    k: 'closed-hihat',
    f: 'floor-tom',
    g: 'mid-tom',
    h: 'high-tom',
    j: 'snare',
    v: 'left-kick',
    b: 'right-kick'
};


function getEl(selector) {

    console.log(selector);
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
    if (element !== null) {
        let active = DRUMKIT_BUTTON_SELECTOR + DRUMKIT_ACTIVE_CLASS;
        //scaling happens in CSS transition property
        element.classList.add(active);
        element.addEventListener('ontransitionend', function () {
            this.classList.remove(active);
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