"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

var calcCash = function calcCash() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$cash = _ref.cash,
      cash = _ref$cash === void 0 ? [] : _ref$cash,
      _ref$eu = _ref.eu,
      eu = _ref$eu === void 0 ? [] : _ref$eu,
      _ref$rus = _ref.rus,
      rus = _ref$rus === void 0 ? [] : _ref$rus;

  var total = 0;
  cash.map(function (item) {
    total += item;
  });
  return total;
};

var money = calcCash(sponsors);
exports.money = money;