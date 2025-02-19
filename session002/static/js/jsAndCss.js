let white = "#fff";
let borderRadius = "30px";
let borderWeigh = "2px";
let borderWeightBol= "4px";
let principalColor = "#75c6ee";
let secondaryColor = "#424651";
let thirdColor = "#AF3B6E";
let forthColor = "#fad3ea";
let fithColor = "#4aad7d";
let whiteColor = "#fff";
let blackColor = "#000";
let grayColor = "#f3f3f3";

function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 17)

        color += (num === 16) ? "F"
                :(num === 14) ? "E"
                :(num === 13) ? "D"
                :(num === 12) ? "C"
                :(num === 11) ? "B"
                :(num === 10) ? "A"
                :num
                ;
    };

    return color;
};