export default function seededShuffle(array, seed) {
    // Use a pseudo-random number generator with a seed
    const pseudoRandom = (seed) => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(pseudoRandom(seed) * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
}
