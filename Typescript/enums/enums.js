var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(Direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
var testA = Test.A;
var nameA = Test[testA];
