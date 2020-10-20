module.exports = function check(str, bracketsConfig) {
    let br;
    if (str.length % 2 !== 0) return false;

    for (let i = 0; i < bracketsConfig.length; ) {
        br = bracketsConfig[i].join("");
        if (str.includes(br)) {
            str = str.replace(br, "");
            i = 0;
        } else i++;
    }
    return str.length === 0 ? true : false;
};
