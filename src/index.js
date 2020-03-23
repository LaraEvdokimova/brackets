module.exports = function check(str, bracketsConfig) {
    const bracketsArray = str.split("");
    for (let i = 0; i < bracketsArray.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                bracketsArray[i] === bracketsConfig[j][0] &&
                bracketsArray[i + 1] === bracketsConfig[j][1]
            ) {
                const currentPosition = i;
                bracketsArray.splice(i, 2);
                i = -1;
            }
        }
        if (bracketsArray.length == 0) {
            return true;
        }
    }
    return false;
};
