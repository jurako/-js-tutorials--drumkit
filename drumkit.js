//CSS selectors
const DRUMKIT_AUDIO_SELECTOR = '.drumkit__audio--';
const DRUMKIT_BUTTON_SELECTOR = '.drumkit__button-';
const DRUMKIT_CRASH_SELECTOR = '.drumkit__crash';
const DRUMKIT_HIHAT_SELECTOR = '.drumkit__hihat';


//CSS classes
const DRUMKIT_ACTIVE_CLASS = 'drumkit__button--active';
const DRUMKIT_CRASH_INIT_POS_CLASS = 'drumkit__crash--init-pos';
const DRUMKIT_HIHAT_CLOSED_POS_CLASS = 'drumkit__hihat--closed-pos';

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
        drumkitPart.currentTime = 0;
        drumkitPart.play();
    }
}

function animateButton(el) {
    if (el !== null) {
        el.classList.add(DRUMKIT_ACTIVE_CLASS);
        el.addEventListener('transitionend', function () {
            this.classList.remove(DRUMKIT_ACTIVE_CLASS);
        });
    }
}

function animateCrash(el) {
    if (el !== null) {
        el.classList.remove(DRUMKIT_CRASH_INIT_POS_CLASS);
        el.addEventListener('transitionend', function () {
            this.classList.add(DRUMKIT_CRASH_INIT_POS_CLASS);
        });
    }
}

function animateHihat(el) {
    if (el !== null) {
        el.classList.add(DRUMKIT_HIHAT_CLOSED_POS_CLASS);
        el.addEventListener('transitionend', function () {
            this.classList.remove(DRUMKIT_HIHAT_CLOSED_POS_CLASS);
        });
    }
}

function buttonHandle(event) {
    let button = buttonMap[event.key];
    if (typeof button === 'undefined') return false;

    playAudio(getEl(DRUMKIT_AUDIO_SELECTOR + button));
    animateButton(getEl(DRUMKIT_BUTTON_SELECTOR + button));

    if (button == 'crash' || button == 'ride') {
        animateCrash(getEl(DRUMKIT_CRASH_SELECTOR));
    }

    if (button == 'hihat-closed') {
        animateHihat(getEl(DRUMKIT_HIHAT_SELECTOR));
    }
}

document.addEventListener('keydown', buttonHandle);