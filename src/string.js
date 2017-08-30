/**
 * 字符串的帮助类
 * author nicholas 2017-8-30
 */

export default {

    format(str) {
        let args = [].slice.call(arguments, 1);
        return str.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != "undefined" ?
                args[number] : match;
        })
    }

}