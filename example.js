/**
* Имеется какой-то кусок данных, содержащий какой-то текст с комментариями.
* Реализуем функцию очистки куска данных от комментариев, двойных пробелов и переносов строк. 
* Как-бы грубая минификация кода.  Возвращает имена аргументов и  очищенный кусок данных.
 */
var data = {
    forTestRegexp: function(segment, opt, callback) {
        segment[opt.section] &&
            /**
             * Образец комментариев которые надо очистить
             */
            //Образец комментариев которые надо очистить
            //Образец комментариев которые надо очистить
            !(function() {
                /**
                 * Образец комментариев которые надо очистить
                 */
                //Образец комментариев которые надо очистить
                //Образец комментариев которые надо очистить
                return callback(null, segment);
            }());
        //Образец комментариев которые надо очистить
    }
};


function clear(text, opt, callback) {
    var funcHeaderRegex = new RegExp("^function\\s*\\((.*?)\\)", 'm'),
        funcBodyRegex = new RegExp("{(.*)\\}$", 'm'),
        code = (text + '')
        .replace(/\/\/[\s\S]+?$/gm, '')
        .replace(/\/\*[\s\S]+?\*\//gm, '')
        .replace(/^\s+|\s+$|\r\n|\r|\n|\t/gm, '')
        .replace(/\s{2,}/g, ' ');

    var args = funcHeaderRegex.exec(code)[1],
        body = funcBodyRegex.exec(code)[1];
    
    // непосредственное применение паттерна
    return callback && callback(null, [args, body]) || !callback && [args, body] || undefined;
}


console.log('\n\nСинхронный результат при вызове с калбэком:\n', clear(data.forTestRegexp, null, function(e, d) {
    console.log('\nАсинхронный результат при вызове с калбэком:\n', e, d);
}));


console.log('\n\nСинхронный результат при вызове без callbackа:\n', clear(data.forTestRegexp, null));
