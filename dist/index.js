'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (src: string, target: string): boolean {
  if (src.length !== target.length) return false;
  var tArray: string[] = target.split('');
  var filtered: string[] = tArray.filter(function (l: string, i: number) {
    if (src[i] === l) {
      return l;
    } else if (src[i] === l.toUpperCase()) {
      return l;
    }
  });
  return filtered.length === src.length;
};