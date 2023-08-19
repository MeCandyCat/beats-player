let file = document.getElementById("dafile");
let myVideo = document.getElementById("videoX");
let fileName = document.querySelector(".file-name");

file.addEventListener("change", () => {
    let fileObject = file.files.item(0);
    let vidurl = URL.createObjectURL(fileObject);
    myVideo.src = vidurl;
    fileName.innerHTML = fileObject.name;
});

const player = new Plyr("video");
