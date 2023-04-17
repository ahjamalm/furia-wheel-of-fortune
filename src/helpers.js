import moment from "moment-timezone";
moment.tz.setDefault('Asia/Riyadh');


export const mockData = [

    {
        name: "GOOD LUCK NEXT TIME!",
        propability: 2,
        index: 1,
        img: '/assets/goodluck.png'
    },
    {
        name: 'HOSE REEL 25M. 1/2"',
        propability: 2,
        index: 2,
        img: '/assets/hosereel.png'
    },
    {
        name: "HOSE SET",
        propability: 1,
        index: 3,
        img: '/assets/hoseSet.png'
    },

    {
        name: "VC4",
        propability: 2,
        index: 4,
        img: '/assets/vc4.png'
    },
    {
        name: "GOOD LUCK NEXT TIME!",
        propability: 4,
        index: 5,
        img: '/assets/goodluck.png'
    },
    {
        name: "VC 3 PLUS",
        propability: 1,
        index: 6,
        img: '/assets/vc3.png'
    },
    {
        name: "KB 5 CORDLESS BROOM",
        propability: 32,
        index: 7,
        img: '/assets/kb5.png'
    },
    {
        name: "SC 1 + EXT HOSE",
        propability: 4,
        index: 8,
        img: '/assets/SC1.png'
    },
    {
        name: "GOOD LUCK NEXT TIME!",
        propability: 1,
        index: 9,
        img: '/assets/goodluck.png'
    },
    {
        name: "WD 2 PLUS",
        propability: 1,
        index: 10,
        img: '/assets/wd2.png'
    },
    {
        name: "K 2 HOME",
        propability: 1,
        index: 11,
        img: '/assets/k2.png'
    },
    {
        name: "K 1 HORIZONTAL",
        propability: 1,
        index: 12,
        img: '/assets/k2Horizontal.png'
    },
    {
        name: "SC 3 UPRIGHT",
        propability: 1,
        index: 13,
        img: '/assets/sc3.png'
    },
];

// const Day1 = [4, 5, 2, 6, 4, 1, 4, 9, 4, 4, 5, 2, 1, 4, 4, 4, 3, 6, 5, 4, 2, 4, 2, 4, 3, 1, 2, 3, 4, 4, 4, 6, 5, 6, 4, 9, 4, 2, 4, 4, 1, 10, 5, 4, 4, 3, 1, 2, 5, 4, 9, 4, 6, 4, 4, 5, 2, 3, 4, 4, 4, 9, 1, 9, 4, 6, 4, 5, 4, 4, 3, 1, 3, 4, 4, 4, 5, 9, 4, 4, 1, 4, 2, 4, 4, 4, 4, 9, 6, 3, 4, 1, 4, 6, 4, 4, 5, 3, 6, 4, 4, 4, 1, 2, 9, 4, 3, 4, 6, 4, 4, 5, 4, 9, 1, 6, 4, 3, 4, 5, 4, 4, 6, 1, 9, 4, 4, 4, 2, 4, 3, 4, 9, 4, 5, 4, 4, 1, 2, 3, 4, 4, 4, 5, 4, 6, 4, 6, 4, 2, 4, 4, 1, 9, 4, 4, 4, 4, 5, 9, 3, 4, 1, 4, 5, 4, 4, 2, 3, 4, 4, 4, 4, 9, 5, 3, 4, 6, 4, 4, 4, 4, 1, 9, 4, 4, 4, 4, 5, 2, 3, 4, 1, 4, 5, 4, 4, 4, 4, 2]
// const Day2 = [4, 5, 2, 6, 4, 1, 4, 9, 4, 4, 5, 2, 1, 4, 7, 4, 3, 6, 5, 4, 2, 4, 2, 4, 4, 1, 2, 3, 4, 4, 4, 6, 5, 6, 4, 9, 4, 2, 4, 4, 1, 10, 5, 4, 4, 4, 1, 2, 5, 4, 9, 4, 6, 4, 4, 5, 2, 3, 4, 5, 4, 9, 1, 9, 4, 6, 4, 5, 4, 4, 3, 4, 3, 4, 4, 4, 5, 9, 6, 4, 4, 4, 2, 4, 4, 6, 4, 9, 6, 3, 4, 1, 4, 6, 4, 4, 5, 3, 6, 4, 4, 4, 1, 2, 9, 4, 3, 4, 6, 4, 4, 5, 4, 9, 1, 6, 4, 3, 4, 5, 4, 4, 6, 1, 9, 4, 4, 4, 2, 4, 3, 4, 9, 4, 5, 4, 4, 1, 2, 3, 4, 4, 4, 5, 4, 6, 4, 6, 4, 2, 4, 4, 1, 9, 4, 4, 4, 4, 5, 9, 3, 4, 1, 4, 5, 4, 4, 2, 3, 4, 4, 4, 4, 9, 5, 3, 4, 6, 4, 4, 4, 4, 1, 9, 4, 4, 4, 4, 5, 2, 3, 4, 1, 4, 5, 4, 4, 4, 4, 2]
// const Day3 = [4, 5, 2, 6, 4, 1, 4, 9, 4, 4, 5, 2, 1, 4, 4, 4, 3, 6, 5, 4, 2, 9, 2, 9, 4, 1, 2, 3, 4, 4, 4, 6, 5, 6, 2, 9, 2, 2, 4, 4, 1, 4, 5, 4, 4, 4, 1, 2, 5, 4, 9, 4, 6, 4, 4, 5, 2, 3, 4, 5, 4, 9, 1, 9, 4, 6, 4, 5, 4, 4, 3, 4, 3, 4, 4, 4, 5, 9, 4, 4, 4, 4, 2, 4, 4, 4, 4, 9, 6, 3, 4, 1, 4, 6, 4, 4, 5, 3, 6, 4, 4, 4, 1, 2, 9, 4, 3, 4, 6, 4, 4, 5, 4, 9, 1, 6, 4, 3, 4, 5, 4, 4, 6, 1, 9, 4, 4, 4, 2, 4, 3, 4, 9, 4, 5, 4, 4, 1, 2, 3, 4, 4, 4, 5, 4, 6, 4, 6, 4, 2, 4, 4, 1, 9, 4, 4, 4, 4, 5, 9, 3, 4, 1, 4, 5, 4, 4, 2, 3, 4, 4, 4, 4, 9, 5, 3, 4, 6, 4, 4, 4, 4, 1, 9, 4, 4, 4, 4, 5, 2, 3, 4, 1, 4, 5, 4, 4, 4, 4, 2]
const Day1 = [12, 1, 8, 9, 5, 4, 1, 5, 9, 7, 1, 5, 11, 1, 5, 9, 10, 5, 9, 1, 6, 1, 5, 9, 2, 1, 5, 13, 5, 9, 1, 3, 5, 5, 9]
export const GetNextPrize = (records) => {
    let availableIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((val, currentVal) => {
        let existed = records?.filter(r => r === currentVal) || []
        if (existed?.length < mockData[currentVal - 1]?.propability) {
            let propability = mockData[currentVal - 1]?.propability - existed?.length
            val = val.concat(Array(propability).fill(currentVal))
        }
        return val
    }, [])
    availableIndex = shuffle(availableIndex)
    var nextPrize = availableIndex[Math.floor(Math.random() * availableIndex.length)];
    return nextPrize
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const GetNextPrizeIndex = (records) => {
    // let map = {
    //     '21/11/2022': Day1,
    //     '22/11/2022': Day2,
    //     '23/11/2022': Day3,
    //     '24/11/2022': Day1,
    //     '25/11/2022': Day2,
    //     '26/11/2022': Day3,
    //     '1/12/2022': Day1,
    //     '2/12/2022': Day2,
    //     '3/12/2022': Day3,
    //     '8/12/2022': Day1,
    //     '9/12/2022': Day2,
    //     '10/12/2022': Day3,
    // }
    // let currentDay = map[moment().format('DD/MM/yyyy')]

    return Day1?.[records?.length || 0]
}