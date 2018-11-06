/**
* Javascript паттерн bi предназначен для превентивной адаптации кода под разные стили программирования. 
* Суть паттерна  заключается в проверке аргументов на наличие возвратно-вызываемой функции
* и в случае её наличия - передачи в неё результата. В случае отсутствия таковой, результат возвращается классически.
*
* Паттерн bi заранее унифицирует способ возврата результата и позволяет использовать 
* код в программах различными стилями программирования (с использованием калбэков и без).
* 
* Сфера применения - написание универсальных функций для разных систем. Как вариант, использование
* в проектах, где еще не определены функицональные требования.
 */

function bi(data, opt, callback) {
    var result;

    //любая бизнес логика внутри функции

    return callback && callback(null, result) || !callback && result || undefined;
}
