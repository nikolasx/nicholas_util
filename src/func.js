/**
 * 一些公用方法
 * author nicholas 2017-8-30
 */

export default {

    //生成GUID
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
    },

    //日期格式化
    dateFormat(date, format) {
        if (format === undefined) {
            format = date;
            date = new Date();
        }
        var map = {
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "m": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "q": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
            var v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            }
            else if (t === 'y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    }


}
