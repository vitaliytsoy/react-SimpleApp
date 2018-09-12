"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TDate_1 = require("./TDate");
var OperationType;
(function (OperationType) {
    OperationType[OperationType["PLOWING"] = 0] = "PLOWING";
    OperationType[OperationType["BOWLING"] = 1] = "BOWLING";
    OperationType[OperationType["FERTILIZATION"] = 2] = "FERTILIZATION";
    OperationType[OperationType["WATERING"] = 3] = "WATERING";
    OperationType[OperationType["RIGGING"] = 4] = "RIGGING";
    OperationType[OperationType["HARVESTING"] = 5] = "HARVESTING"; // Сбор урожая
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var Assessment;
(function (Assessment) {
    Assessment[Assessment["EXCELLENT"] = 0] = "EXCELLENT";
    Assessment[Assessment["SATISFACTORILY"] = 1] = "SATISFACTORILY";
    Assessment[Assessment["BADLY"] = 2] = "BADLY"; // Плохо
})(Assessment = exports.Assessment || (exports.Assessment = {}));
var Operation = /** @class */ (function () {
    function Operation(args) {
        var _a = args.id, id = _a === void 0 ? null : _a, type = args.type, date = args.date, area = args.area, _b = args.comment, comment = _b === void 0 ? null : _b, _c = args.assessment, assessment = _c === void 0 ? null : _c;
        this.id = id;
        this.type = type;
        this.date = new TDate_1.default(date);
        this.area = area;
        this.comment = comment;
        this.assessment = assessment;
    }
    return Operation;
}());
exports.default = Operation;
