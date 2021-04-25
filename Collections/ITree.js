var ITree = function() {}; // interface

ITree.prototype.init = function(array){}; // инициализация дерева на основании переданного массива данных
ITree.prototype.clear = function(){}; // удаление всех узлов дерева
ITree.prototype.size = function(){}; // возвращает количество узлов
ITree.prototype.insert = function(value){}; // вставка узла в дерево
ITree.prototype.print = function(type, callback){}; // обход в глубину дерева - тремя способами
ITree.prototype.toArray = function(){}; // представление дерева в виде массива данных
ITree.prototype.search = function(value){}; // возвращает узел согласно переданному значению
ITree.prototype.width = function(){}; // возвращает максимальную ширину дерева
ITree.prototype.height = function(){}; // возвращает высоту дерева
ITree.prototype.nodes = function(){}; // возвращает количетсво узлов в дереве
ITree.prototype.leaves = function(){}; // возвращает количетсво листьев в дереве
ITree.prototype.reverse = function(){}; // реверс дерева
ITree.prototype.minNode = function(){}; // возвращает узел с минимальным числом
ITree.prototype.maxNode = function(){}; // возвращает узел с максимальным числом
ITree.prototype.remove = function(value){}; // удаление узла согласно переданному числу

module.exports = ITree;