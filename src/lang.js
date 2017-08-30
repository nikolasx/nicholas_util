export const string = {

    format(str) {
        let args = [].slice.call(arguments, 1);
        return str.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != "undefined" ?
                args[number] : match;
        })
    }

}

export const func = {
    createGUID() {

        let arr = [];
        for (let i = 0; i < 32; i++) {
            arr.push(Math.floor(Math.random() * 16).toString(16))
        }
        return arr.join("")
    },


    extend(target, source) {
        for (var key in source) {
            target[key] = source[key]
        }
    }
}
