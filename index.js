//#region Global Constants

const video = document.getElementById("video");
const fileInput = document.getElementById("fileInput");
const fileInputBtn = document.getElementById("fileInputBtn");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volUp = document.getElementById("volUp");
const volDown = document.getElementById("volDown");

//#endregion Global Constants

//#region Events

fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    debugger;

    if (file.type === "video/mp4") {
        const spinner = document.getElementById("spinner");
        spinner.classList.remove("d-none");
        spinner.classList.add("d-flex");

        setTimeout(() => {
            spinner.classList.remove("d-flex");
            spinner.classList.add("d-none");
        }, 3000);

        setTimeout(() => {
            video.src = URL.createObjectURL(file);
        }, 3000);
    }
    else
        alert("Error: selecciona un archivo de vídeo con formato mp4.");
});

fileInputBtn.addEventListener("click", () => {
    fileInput.click();
});

play.addEventListener('click', () => {
    video.play();
});

pause.addEventListener('click', () => {
    video.pause();
});

volUp.addEventListener('click', () => {
    if (video.volume < 1.0)
        video.volume += 0.1;
});

volDown.addEventListener('click', () => {
    if (video.volume > 0.0)
        video.volume -= 0.1;
});

//#endregion Events