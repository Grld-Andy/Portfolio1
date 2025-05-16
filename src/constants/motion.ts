import type { WheelIcon } from "../types/WheelIcon";

export const itunes: WheelIcon = {
    position: {x: 0, y: -300},
    image: '/icons/itunes.png'
}
export const github: WheelIcon = {
    position: {x: 146, y: -255},
    image: '/icons/github.png'
}
export const x: WheelIcon = {
    position: {x: 256, y: -146},
    image: '/icons/x.png'
}
export const illustrator: WheelIcon = {
    position: {x: 300, y: 0},
    image: '/icons/illustrator.png'
}
export const framer: WheelIcon = {
    position: {x: 256, y: 146},
    image: '/icons/framer.png'
}
export const design: WheelIcon = {
    position: {x: 146, y: 255},
    image: '/icons/Design.png'
}
export const vscode: WheelIcon = {
    position: {x: 0, y: 300},
    image: '/icons/Coding.png'
}
export const ps: WheelIcon = {
    position: {x: -146, y: 255},
    image: '/icons/ps.png'
}
export const obs: WheelIcon = {
    position: {x: -256, y: 146},
    image: '/icons/OBS.png'
}
export const figma: WheelIcon = {
    position: {x: -300, y: 0},
    image: '/icons/Figma icon.svg'
}
export const threads: WheelIcon = {
    position: {x: -256, y: -146},
    image: '/icons/Group 2038.png'
}
export const photoshop: WheelIcon = {
    position: {x: -146, y: -255},
    image: '/icons/Photoshop.png'
}
export const keyframeTimes = [
    0,           0.000000000000005,
    0.0833,      0.083305,
    0.1667,      0.166705,
    0.25,        0.250005,
    0.3333,      0.333305,
    0.4167,      0.416705,
    0.5,         0.500005,
    0.5833,      0.583305,
    0.6667,      0.666705,
    0.75,        0.750005,
    0.8333,      0.833305,
    0.9167,      0.916705,
    1
];



export const wheelPattern = [
              { img: itunes, path: [itunes, x, framer, vscode, obs, threads, itunes] },
              { img: github, path: [github, illustrator, design, ps, figma, photoshop, github] },
              { img: x, path: [x, framer, vscode, obs, threads, itunes, x] },
              { img: illustrator, path: [illustrator, design, ps, figma, photoshop, github, illustrator] },
              { img: framer, path: [framer, vscode, obs, threads, itunes, x, framer] },
              { img: design, path: [design, ps, figma, photoshop, github, illustrator, design] },
              { img: vscode, path: [vscode, obs, threads, itunes, x, framer, vscode] },
              { img: ps, path: [ps, figma, photoshop, github, illustrator, design, ps] },
              { img: obs, path: [obs, threads, itunes, x, framer, vscode, obs] },
              { img: figma, path: [figma, photoshop, github, illustrator, design, ps, figma] },
              { img: threads, path: [threads, itunes, x, framer, vscode, obs, threads] },
              { img: photoshop, path: [photoshop, github, illustrator, design, ps, figma, photoshop] }
            ]