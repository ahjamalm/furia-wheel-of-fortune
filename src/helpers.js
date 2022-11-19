export const mockData = [
    {
        name: "PREMIUM BARBEQUE GLOVE SET",
        propability: 47,
        index: 1
    },
    {
        name: "CHIMNEY STARTER",
        propability: 50,
        index: 2
    },
    {
        name: "HICKORY WOOD CHUNKS - 0.7KG",
        propability: 47,
        index: 3
    },
    {
        name: "NICE TRY!",
        propability: 200,
        index: 4
    },
    {
        name: "LUMPWOOD CHARCOAL - 5KG",
        propability: 59,
        index: 5
    },
    {
        name: "THREE SIDED GRILL BRUSH - 30 CM",
        propability: 47,
        index: 6
    },
    {
        name: "GAS GRILL SPIRIT II E-210 GBS",
        propability: 1,
        index: 7
    },
    {
        name: "NICE TRY!",
        propability: 200,
        index: 8
    },
    {
        name: "APRON",
        propability: 47,
        index: 9
    },
    {
        name: "Master-Touch GBS E-5750, Black",
        propability: 2,
        index: 10
    },
];



export const GetNextPrize = (records) => {
    let availableIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((val, currentVal) => {
        let existed = records?.filter(r => r === currentVal) || []
        if (existed?.length < mockData[currentVal - 1]?.propability) {
            let propability = mockData[currentVal - 1]?.propability - existed?.length
            val = val.concat(Array(propability).fill(currentVal))
            // val.push(currentVal)
        }
        return val
    }, [4,8])
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