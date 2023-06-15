export const MAIN_AUDIO = new Audio('Audio/Main.mp3');
export const PENCIL_AUDIO = new Audio('Audio/Pencil.mp3')
export const ERROR_AUDIO = new Audio('Audio/Error.mp3')
export const WIN_AUDIO = new Audio('Audio/Win.mp3')

MAIN_AUDIO.addEventListener('ended', () => {
    MAIN_AUDIO.currentTime = 0;
    MAIN_AUDIO.play();
});