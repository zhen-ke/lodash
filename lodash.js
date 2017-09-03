var xmit = {
  /**
   * 数组分割
   * @param {array} [arr] [数组]
   * @param {number} [size] [数组长度]
   * @return {[array]} [数组]
   */

  chunk: function(arr, size = 1) {
    var l = arr.length;
    var tmp = [];
    var result = [];
    var count = 0;
    for (var i = 0; i < l; i++) {
      count++;
      tmp.push(arr[i]);
      if (count == size) {
        count = 0;
        result.push(tmp);
        tmp = [];
      }
    }
    if (count == 0) {
      return result;
    } else {
      result.push(tmp);
      tmp = [];
    }
    return result;
  },

  /**
   * 选非0的数字
   * @param {array} [arr] [数组]
   * @return {[array]} [数组]
   */
  compact: function(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (Boolean(array[i])) {
        arr.push(array[i]);
      }
    }
    return arr;
  },

  /**
   * 数组去维度
   * @param {array} [arr] [数组]
   * @return {[array]} [数组]
   */
  concat: function(array, values) {
    var arr = [];

    function delArray(arrA, arrO) {
      if (arrA == null) {
        arrO.push(arrA);
      } else {
        for (var j = 0; j < arrA.length; j++) {
          arrO.push(arrA[j]);
        }
      }
      return arrO;
    }
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
        arr = delArray(arguments[i], arr);
      } else {
        arr.push(arguments[i]);
      }
    }
    return arr;
  },

  /**
   * 多个数组找不同项
   * @param {array} [arr] [数组]
   * @return {[array]} [数组]
   */
  difference: function(array, value) {
    var arr = array;
    var l = arguments.length;
    if (l > 1) {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(arguments[l - 1])) {
          for (var j = 0; j < value.length; j++) {
            if (array[i] != value[j]) {
              continue;
            }
            arr.splice(i, 1);
          }
        }
      }
    } else {
      return arr;
    }
    return arr;
  },
  differenceBy: function(array, obj) {
    if (typeof obj === "function") {

    }
  },
  /**
   * 根据给定的大小参数从右到左缩小数组
   * @param {array} [arr] [数组]
   * @return {[array]} [数组]
   */
  drop: function(array, n = 1) {
    var l = array.length;
    var arr = array;
    for (var i = 0; i < l; i++) {
      if (i < n) {
        arr.splice(0, 1);
      }
    }
    return arr;
  },

  /**
   * 根据给定的大小参数从左到右缩小数组
   * @param {array} [arr] [数组]
   * @return {[array]} [数组]
   */
  dropRight: function(array, n = 1) {
    var arr = [];
    for (var i = 0; i < array.length - n; i++) {
      arr.push(array[i]);
    }
    return arr;
  },

  /**
   * 插入、删除或替换数组的元素
   * @param {array} [arr] [数组]
   * @return {[array]} [数组]
   */
  fill: function(array, value, start = 0, end) {
    var arr = array.slice(0);
    end = end || arr.length;
    for (var i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr;
  },
  findIndex: function(array, fn, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (fn(array[i])) {
        return i
      }
    }
    return -1
  },
  findLastIndex: function(array, fn, fromIndex = array.length - 1) {
    for (var i = fromIndex; i > 0; i--) {
      if (fn(array[i])) {
        return i
      }
    }
    return -1
  },
  flatten: function(array) {
    return array.reduce((a, b) => a.concat(b), [])
  },
  flattenDeep: function(array) {
    return array.toString().split(",").map(it => +it)
  },
  flattenDepth: function(array, depth = 1) {
    return array.reduce((a, b) => a.concat(Array.isArray(b) && depth > 1 ? this.flattenDepth(b, depth - 1) : b), [])
  },
  fromPairs: function(pairs) {
    let obj = {}
    for (let i in pairs) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  },
  head: function(array) {
    if (array.length) {
      return array[0]
    } else {
      return undefined
    }
  },
  indexOf: function(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (value === array[i]) {
        return i
      }
    }
    return -1
  },
  initial: function(array) {
    return array.slice(0, array.length - 1)
  },
  intersection: function(...arg) {
    // let count = 1;
    // let arr = []
    // let temp
    // for (var i = 0; i < arg[0].length; i++) {//debugger
    //   temp = arg[0][i]
    //   arr.push(temp)
    //   for(let j = 1; j < arg.length; j++) {
    //     if(arg[j].indexOf(temp) !== -1) {
    //     arr.push(temp)
    //     }
    //   }
    // }
    // return arr
  },
  join: function(array, separator = ',') {
    return array.join(`${separator}`)
  },
  last: function(array) {
    return array.slice(array.length - 1)
  },
  lastIndexOf: function(array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i > 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },
  nth: function(array, n = 0) {
    for (var i = 0; i < array.length; i++) {
      if (n < 0) {
        n += array.length
      }
      if (i === n) {
        return array[i]
      }
    }
  },
  pull: function(array, ...args) {
    for (var i = 0; i < array.length; i++) {
      if (args.indexOf(array[i]) !== -1) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  },
  pullAll: function(array, values) {
    for (var i = 0; i < array.length; i++) {
      if (values.indexOf(array[i]) !== -1) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  },
  pullAt: function(array, ...args) { // 5, 10, 15, 20
    let arr = []
    for (var i = 0; i < args.length; i++) {
      arr.push(array[args[i]])
    }
    this.pullAll(array, arr)
    return arr
  },
  remove: function(array, fn) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        arr.push(array[i])
        array.splice(i, 1)
        i--
      }
    }
    return arr
  },
  reverse: function(array) {
    return array.reverse()
  },
  slice: function(array, start = 0, end = array.length) {
    let arr = []
    for (var i = start; i < end; i++) {
      arr.push(array[i])
    }
    return arr
  },
  sortedIndex: function(array, value) {
    let left = 0;
    let right = array.length - 1
    let mid
    while (left <= right) {
      mid = ((right + left) / 2) | 0
      if (value <= array[mid]) {
        right = mid - 1
      } else if (value > array[mid]) {
        left = mid + 1
        mid++
      }
    }
    return mid
  },
  sortedIndexOf: function(array, value) {
    return this.sortedIndex(array, value)
  },
  sortedLastIndex: function(array, value) {
    let left = 0;
    let right = array.length - 1
    let mid
    while (left <= right) {
      mid = ((right + left) / 2) | 0
      if (value < array[mid]) {
        right = mid - 1
      } else if (value >= array[mid]) {
        left = mid + 1
        mid++
      }
    }
    return mid
  },
  sortedLastIndexOf: function(array, value) {
    return this.sortedLastIndex(array, value) - 1
  },
  sortedUniq: function(array) {
    let arr = []
    for (let key of array) {
      if (arr.indexOf(key) === -1) {
        arr.push(key)
      }
    }
    return arr
  },
  sortedUniqBy: function(array, fn) {
    let arr = []
    let temp = []
    for (let i in array) {
      if (temp.indexOf(fn(array[i])) === -1) {
        temp.push(fn(array[i]))
        arr.push(array[i])
      }
    }
    return arr
  },
  tail: function(array) {
    return array.slice(1)
  },
  take: function(array, n = 1) {
    return array.slice(0, n)
  },
  takeRight(array, n = 1) {
    if (n > array.length) {
      return array
    }
    return array.slice(array.length - n)
  },
  union: function(...args) {
    let arr = args.reduce((a, b) => a.concat(b), [])
    return this.sortedUniq(arr)
  },
  uniq: function(array) {
    return this.sortedUniq(array)
  },
  uniqBy: function(array, fn) {
    let arr = []
    let temp = []
    for (let i in array) {
      if (temp.indexOf(fn(array[i])) === -1) {
        temp.push(fn(array[i]))
        arr.push(array[i])
      }
    }
    return arr
  },
  without: function(array, ...args) {
    for (var i = 0; i < args.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (args[i] === array[j]) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  },
  zip: function(...args) { // ['fred', 'barney'], [30, 40], [true, false]);
    let arr = []
    let arr1 = []
    let arr2 = []
    for (let i in args) {
      if (args[i][0] !== undefined || args[i][1] !== undefined) {
        arr1.push(args[i][0])
        arr2.push(args[i][1])
      }
    }
    arr.push(arr1, arr2)
    return arr
  },
  zipObject: function(...args) {
    let obj = {}
    for (let i in args[0]) {
      obj[args[0][i]] = args[1][i]
    }
    return obj
  },
  countBy: function(collection, iteratee) {
    let obj = {}
    if(this.isFunction(iteratee)) {
      for (let key in collection) {
        obj[iteratee(collection[key])] = obj[iteratee(collection[key])] ? ++obj[iteratee(collection[key])] : 1
      }
    }
    if(this.isString(iteratee) || this.isArray(iteratee)) {
      for(let keys in collection) {
        obj[this.property(iteratee)(collection[keys])] = obj[this.property(iteratee)(collection[keys])] ? ++obj[this.property(iteratee)(collection[keys])] : 1
      }
    }
    return obj
  },
  forEach: function(object, fn) {
    for(let keys in object) {
      fn(object[keys], keys, object)
    }
    return object
  },
  forEachRight: function(object, fn) {
    let arr = []
    if(this.isArray(object)) {
      for(let i = object.length - 1; i >= 0; i--) {
        fn(object[i] , i, object)
      }
    }else {
      for(let keys in object) {
        arr.push([object[keys], keys])
      }
      for(let i = arr.length - 1; i >= 0; i--) {
        fn(arr[i][0] , arr[i][1], object)
      }
    }
    return object
  },
  now: function() {
    return new Date().getTime()
  },
  after: function(n, fn) {
    let count = 0
    return function(...args) {
      count++
      if (count >= n) {
        return fn(...args)
      }
    }
  },
  ary: function(func, n = func.length) {
    return function(...args) {
      let arg = args.slice(0, n)
      return fn(...arg)
    }
  },
  before: function(n, fn) {
    let count = 0
    return function(...args) {
      count++
      if (count <= n) {
        return fn(...args)
      }
    }
  },
  bind: function(func, thisArg) {
    return function(...args) {
      return func.call(thisArg)
    }
  },
  debounce: function(fn, wait = 0) {
    let timeid
    return function(...args) {
      clearTimeout(timeid)
      timeid = setTimeout(function() {
        fn(...args)
      }, wait)
    }
  },
  throttle: function(fn, wait = 0) {
    var lastRunTime = -Infinity
    return function(...args) {
      var now = Date.now()
      if (now - lastRunTime > wait) {
        fn(...args)
        lastRunTime = now
      }
    }
  },
  defer: function(fn, ...args) { // 推迟调用fn，直到当前堆栈清理完毕。
    return setTimeout(fn, 0, ...args)
  },
  delay: function(fn, wait, ...args) {
    return setTimeout(function() {
      fn(...args)
    }, wait)
  },
  flip: function(fn) {
    return function(...args) {
      return fn(...args.reverse())
    }
  },
  negate: function(fn) {
    return function(...args) {
      return !fn(...args)
    }
  },
  once: function(fn) {
    let flag = true
    if(flag) {
      return function(...args) {
        flag = false
        return fn(...args)
      }
    }
  },
  rearg: function(fn, ...indexes) {
    return function(...args) {
      let obj = {}
      let arr = []
      for (let key in args) {
        obj[key] = args[key]
      }
      for (let i in indexes[0]) {
        arr.push(obj[indexes[0][i]])
      }
      return arr
    }
  },
  spread: function(fn, start = 0) {
    return function(args) {
      return fn(...(args.slice(start)))
    }
  },
  unary: function(fn) {
    return function(args) {
      return fn(args)
    }
  },
  castArray: function(value) {
    let arr = []
    if (arguments.length === 0) {
      return arr
    } else {
      if (Object.prototype.toString.call(value) === "[object Array]") {
        return value
      } else {
        if (value || value === undefined || value === null) {
          arr.push(value)
          return arr
        }
      }
    }
  },
  clone: function(value) {
    let result = Object.prototype.toString.call(value) === "[object Array]" ? [] : {}
    for (let keys in value) {
      if (Object.prototype.hasOwnProperty.call(value, keys)) {
        result[keys] = value[keys]
      }
    }
    return result
  },
  cloneDeep: function(value) {
    let result = Object.prototype.toString.call(value) === "[object Array]" ? [] : {}
    for (let keys in value) {
      if (Object.prototype.hasOwnProperty.call(value, keys)) {
        if (typeof value[keys] === 'object') {
          result[keys] = Object.prototype.toString.call(value[keys]) === "[object Array]" ? [] : {}
          result[keys] = this.cloneDeep(value[keys])
        } else {
          result[keys] = value[keys]
        }
      }
    }
    return result
  },
  eq: function(object, other) {
    return object === other
  },
  gt: function(value, other) {
    if (value > other) {
      return true
    } else {
      return false
    }
  },
  gte: function(value, other) {
    if (value >= other) {
      return true
    } else {
      return false
    }
  },
  isArguments: function(value) {
    return Object.prototype.toString.call(value) === "[object Arguments]"
  },
  isArray: function(value) {
    return Object.prototype.toString.call(value) === "[object Array]"
  },
  isArrayBuffer: function(value) {
    return Object.prototype.toString.call(value) === "[object ArrayBuffer]"
  },
  isArrayLike: function(value) {
    if(value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER && typeof value !== "function") {
      return true
    }else {
      return false
    }
  },
  isArrayLikeObject: function(value) {
    if(typeof value === "object" && this.isArrayLike(value)) {
      return true
    }else {
      return false
    }
  },
  isBoolean: function(value) {
    return Object.prototype.toString.call(value) === "[object Boolean]"
  },
  isBuffer: function(value) {
    return Object.prototype.toString.call(value) === "[object Buffer]"
  },
  isDate: function(value) {
    return Object.prototype.toString.call(value) === "[object Date]"
  },
  isElement: function(obj) {
    return Object.prototype.toString.call(obj) === "[object HTMLBodyElement]"
  },
  isError: function(value) {
    return Object.prototype.toString.call(value) === "[object Error]"
  },
  isFinite: function(value) {
    if(typeof value === "number" && Math.abs(value) < Infinity) {
      return true
    }
    return false
  },
  isFunction: function(value) {
    return Object.prototype.toString.call(value) === "[object Function]"
  },
  isInteger: function(value) {
    return typeof value === "number" && value % 1 === 0
  },
  isLength: function(value) {
    return this.isInteger(value)
  },
  isMap: function(value) {
    return Object.prototype.toString.call(value) === "[object Map]"
  },
  isNaN: function(value) {
    if(typeof value === "object") {
      return Number.isNaN(value.valueOf())
    }
    return Number.isNaN(value)
  },
  isNative: function(value) {
    return (/\{\s*\[native code\]\s*\}/).test('' + value);
  },
  isNil: function(value) {
    return Object.prototype.toString.call(value) === "[object Null]" || Object.prototype.toString.call(value) === "[object Undefined]"
  },
  isNull: function(value) {
    return Object.prototype.toString.call(value) === "[object Null]"
  },
  isNumber: function(value) {
    return Object.prototype.toString.call(value) === "[object Number]"
  },
  isObject: function(value) {
    return (typeof value === "object" || typeof value === "function")&& value !== null
  },
  isObjectLike: function(value) {
    return typeof value === "object" && value !== null
  },
  isPlainObject: function(value) {
    return value.constructor === Object || value.__proto__ === null
  },
  isRegExp: function(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]"
  },
  isSafeInteger: function(value) {
    return Number.isSafeInteger(value)
  },
  isSet: function(value) {
    return Object.prototype.toString.call(value) === "[object Set]"
  },
  isString: function(value) {
    return Object.prototype.toString.call(value) === "[object String]"
  },
  isSymbol: function(value) {
    return Object.prototype.toString.call(value) === "[object Symbol]"
  },
  isTypedArray: function(value) {
    return Object.prototype.toString.call(value) === "[object Uint8Array]"
  },
  isUndefined: function(value) {
    return Object.prototype.toString.call(value) === "[object Undefined]"
  },
  isWeakMap: function(value) {
    return Object.prototype.toString.call(value) === "[object WeakMap]"
  },
  isWeakSet: function(value) {
    return Object.prototype.toString.call(value) === "[object WeakSet]"
  },
  lt: function(value, other) {
    return value < other ? true : false
  },
  lte: function(value, other) {
    return value <= other ? true : false
  },
  toArray: function(value) {
    let arr = []
    for(let i in value) {
      arr.push(value[i])
    }
    return arr
  },
  toFinite: function(value) {
    if(value === Infinity) {
      return 1.7976931348623157e+308
    }else if(value === -Infinity) {
      return -1.7976931348623157e+308
    }else {
      return value
    }
  },
  toInteger: function(value) {
    if(value === Infinity || value === -Infinity) {
      let sn = value > 0 ? 1 : -1
      return sn * 1.7976931348623157e+308
    }
    return value | 0
  },
  toNumber: function(value) {
    return Number(value)
  },
  toPlainObject: function(value) {
    let obj = {}
    for(let keys in value) {
      obj[keys] = value[keys]
    }
    return obj
  },
  toString: function(value) {
    if(1 / value === -Infinity) {
      return "-" + 0
    }
    if(value !== null || value !== undefined) {
      return value + ""
    }
  },
  add: function(x, y) {
    return x + y
  },
  divide: function(x,y) {
    return x / y
  },
  max: function(array) {
    return Math.max(...array)
  },
  mean: function(array) {
    return array.reduce((a,b) => a + b) / array.length
  },
  min: function(array) {
    return Math.min.apply(null, array)
  },
  multiply: function(x, y) {
    return x * y
  },
  subtract: function(x,y) {
    return x - y
  },
  sum: function(array) {
    return array.reduce((a,b) => a + b)
  },
  inRange: function(number, start = 0, end) {
    if(arguments.length === 2) {
      start = 0
      end = arguments[1]
    }
    if(start > end) {
      [start, end] = [end, start]
    }
    if(number >= start && number < end) {
      return true
    }
    return false
  },
  random: function(lower=0, upper=1, floating) {
    let result
    if(arguments.length === 1) {
      lower = 0
      upper = arguments[0]
      return result = Math.random() * (lower - upper) + upper
    }
    if(arguments.length === 2) {
      if(arguments[1] === true) {
        return result = Math.random() * (lower - upper) + upper
      }else {
        return result = Math.random() * (lower - upper) + upper | 0
      }
    }
    if(arguments.length === 3) {
      if(arguments[2] === true) {
        return result = Math.random() * (lower - upper) + upper
      }else {
        return result = Math.random() * (lower - upper) + upper | 0
      }
    }
  },
  assign: function(object, ...sources) {
    // console.log(...sources,sources)
    for(let keys in [...sources]) {
      // console.log(sources[keys])
      for(let val in sources[keys]) {
        if(Object.prototype.hasOwnProperty.call(sources[keys], val)) {
          object[val] = sources[keys][val]
        }
      }
    }
    return object
  },
  assignIn: function(object, ...sources) {
    for(let keys in [...sources]) {
      for(let val in sources[keys]) {
        object[val] = sources[keys][val]
      }
    }
    return object
  },
  at: function(object, ...paths) { // 'a[0].b.c'.split("[").join('.').split(']').join('.').split('.')
    let arr = []
    let str
    for(let keys in paths) {
      for(let i in paths[keys]) {
        str = []
        for(let j in paths[keys][i]) {
          if(paths[keys][i][j] === "[" || paths[keys][i][j] === "]" || paths[keys][i][j] === ".") {
            continue
          }else {
            str.push([paths[keys][i][j]])
          }
        }
        arr.push(str.reduce((a,b) => a[b],object))
      }
    }
    return arr
  },
  create: function(prototype, properties) {
    let obj = {}
    obj.__proto__ = prototype
    if(properties) {
      for(let keys in properties) {
        obj[keys] = properties[keys]
      }
    }
    return obj
  },
  defaults: function(object, ...args) {
    for(let keys in args) {
      for(let val in args[keys]) {
        if(args[keys].hasOwnProperty(val)) {
          if(!object[val]) {
            object[val] = args[keys][val]
          }
        }
      }
    }
    return object
  },
  findKey: function(object, fn) {
    for(let keys in object) {
      if(fn(object[keys])) {
        return keys
      }
    }
    return undefined
  },
  findLastKey: function(object, fn) {
    let arr = []
    for(let keys in object) {
      if(fn(object[keys])) {
        arr.push(keys)
      }
    }
    if(arr.length === 0) {
      return undefined
    }else {
      return arr[arr.length - 1]
    }
  },
  forIn: function(object, fn) {
    for(let keys in object) {
      fn(object[keys], keys, object)
    }
    return object
  },
  forInRight: function(object, fn) {
    let arr = []
    for(let keys in object) {
      arr.unshift([object[keys],keys])
    }
    for(let val of arr) {
      fn(val[0],val[1],object)
    }
    return object
  },
  forOwn: function(object, fn) {
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        fn(object[keys], keys, object)
      }
    }
    return object
  },
  forOwnRight: function(object, fn) {
    let arr = []
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        arr.unshift([object[keys],keys])
      }
    }
    for(let val of arr) {
      fn(val[0],val[1],object)
    }
    return object
  },
  functions: function(object) {
    let arr = []
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        arr.push(keys)
      }
    }
    return arr
  },
  functionsIn: function(object) {
    let arr = []
    for(let keys in object) {
      arr.push(keys)
    }
    return arr
  },
  get: function(object, path, defaultValue) {
    let paths = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".")
    return paths.reduce((a, b) => {
      if(a === undefined) {
        return undefined
      }else {
        return a[b]
      }
    }, object) || defaultValue
  },
  invert: function(object) {
    let obj = {}
    for(let keys in object) {
      obj[object[keys]] = keys
    }
    return obj
  },
  invertBy: function(object, fn) {
    let obj = {}
    let val
    for(let keys in object) {
      if(arguments.length === 2) {
        val = fn(object[keys])
      }else {
        val = object[keys]
      }
      if(obj[val]) {
        obj[val].push(keys)
      }else {
        obj[val] = [keys]
      }
    }
    return obj
  },
  keys: function(object) {
    let arr = []
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        arr.push(keys)
      }
    }
    return arr
  },
  keysIn: function(object) {
    let arr = []
    for(let keys in object) {
      arr.push(keys)
    }
    return arr
  },
  mapKeys: function(object, fn) {
    let obj = {}
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        obj[fn(object[keys], keys, object)] = object[keys]
      }
    }
    return obj
  },
  mapValues: function(object, fn) {
    let obj = {}
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        obj[keys] = fn(object[keys])
      }
    }
    return obj
  },
  omit: function(object, ...props) {
    let obj = {}
    let result = {}
    let arr = props.toString().split(",")
    for(let i in arr) {
      obj[arr[i]] = arr[i]
    }
    for(let keys in object) {
      if(!obj[keys]) {
        result[keys] = object[keys]
      }
    }
    return result
  },
  omitBy: function(object, fn) {
    let obj = {}
    for(let i in object) {
      if(!fn(object[i], i)) {
        obj[i] = object[i]
      }
    }
    return obj
  },
  pick: function(object, ...props) {
    let obj = {}
    let result = {}
    let arr = props.toString().split(",")
    for(let i in arr) {
      obj[arr[i]] = arr[i]
    }
    for(let keys in object) {
      if(obj[keys] !== undefined) {
        result[keys] = object[keys]
      }
    }
    return result
  },
  pickBy: function(object, fn) {
    let obj = {}
    for(let i in object) {
      if(fn(object[i], i)) {
        obj[i] = object[i]
      }
    }
    return obj
  },
  result: function(object, path, defaultValue) {
    let paths = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".")
    return paths.reduce((a, b) => {
      if(a === undefined) {
        return undefined
      }else if(this.isFunction(a)) {
        return a.call(this)
      }else {
        return a[b]
      }
    }, object) || defaultValue
  },
  set: function(object, path, value) {
    let paths = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".")
  },
  toPairs: function(object) {
    let arr = []
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        arr.push([keys, object[keys]])
      }
    }
    return arr
  },
  toPairsIn: function(object) {
    let arr = []
    for(let keys in object) {
      arr.push([keys, object[keys]])
    }
    return arr
  },
  values: function(object) {
    let arr = []
    for(let keys in object) {
      if(object.hasOwnProperty(keys)) {
        arr.push(object[keys])
      }
    }
    return arr
  },
  valuesIn: function(object) {
    let arr = []
    for(let keys in object) {
      arr.push(object[keys])
    }
    return arr
  },
  deburr: function(string) {
    let obj = {
      // Latin-1 Supplement block.
      '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
      '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
      '\xc7': 'C',  '\xe7': 'c',
      '\xd0': 'D',  '\xf0': 'd',
      '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
      '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
      '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
      '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
      '\xd1': 'N',  '\xf1': 'n',
      '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
      '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
      '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
      '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
      '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
      '\xc6': 'Ae', '\xe6': 'ae',
      '\xde': 'Th', '\xfe': 'th',
      '\xdf': 'ss',
      // Latin Extended-A block.
      '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
      '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
      '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
      '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
      '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
      '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
      '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
      '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
      '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
      '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
      '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
      '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
      '\u0134': 'J',  '\u0135': 'j',
      '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
      '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
      '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
      '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
      '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
      '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
      '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
      '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
      '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
      '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
      '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
      '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
      '\u0163': 't',  '\u0165': 't', '\u0167': 't',
      '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
      '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
      '\u0174': 'W',  '\u0175': 'w',
      '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
      '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
      '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
      '\u0132': 'IJ', '\u0133': 'ij',
      '\u0152': 'Oe', '\u0153': 'oe',
      '\u0149': "'n", '\u017f': 's'
    }
    return string.split("").map(it => {
      console.log("\\u0" + it.charCodeAt(0))
      if(obj["\\u0" + it.charCodeAt(0)]) {
        return obj["\\u0" + it.charCodeAt(0)]
      }
    })
  },
  endsWith: function(string, target, position = string.length) {
    let str = string.slice(0,position)
    if(str[str.length - 1] === target) {
      return true
    }
    return false
  },
  escape: function(string) {
    let obj = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }
    return string.split("").map(it => {
      if(obj[it]) {
        return it = obj[it]
      }else {
        return it = it
      }
    }).join("")
  },
  escapeRegExp: function(string) {
    let obj = {
      "^": true,
      "$": true,
      "" : true,
      ".": true,
      "*": true,
      "+": true,
      "?": true,
      "(": true,
      ")": true,
      "[": true,
      "]": true,
      "{": true,
      "}": true,
      "|": true
    }
    return string.split("").map(it => {
      if(obj[it]) {
        return it = "\\" + it
      }else {
        return it = it
      }
    }).join("")
  },
  lowerFirst: function(string) {
    return string[0].toLowerCase() + string.slice(1)
  },
  pad: function(string, number, chars = " "){
    let str = string.split("")
    for(let i = 0, l = number - str.length; i < l; i++) {
      if(chars.length < number) {
        if(str.length + chars.length < number) {
          str.push(chars)
        }
        if(str.length + chars.length < number) {
          str.unshift(chars)
        }
      }else {
        if(str.length < number) {
          str.push(chars)
        }
        if(str.length < number) {
          str.unshift(chars)
        }
      }
    }
    return str.join("").slice(0, number)
  },
  padEnd: function(string, number, chars = " ") {
    return (string + chars.repeat(number)).slice(0, number)
  },
  padStart: function(string, number, chars = " ") {
    return ((chars.repeat(number).split("").reverse().join("")) + string).slice((number * chars.length) - (number - string.length))
  },
  repeat: function(string, n = 1) {
    let str = ""
    for (var i = 0; i < n; i++) {
      str +=string
    }
    return str
  },
  replace: function(string, pattern, replacement) {
    let arr = string.split(" ")
    for(let keys in arr) {
      if(arr[keys] === pattern) {
        arr[keys] = replacement
      }
    }
    return arr.join(" ")
  },
  split: function(string, separator, limit) {
    return string.split(separator).slice(0, limit)
  },
  unescape: function(string) {
    let obj = {
      "&amp;": "&",
      "&lt;" :"<",
      "&gt;"  : ">",
      "&quot;" : '"',
      "&#39;" : "'"
    }
    return string.split("").map(it => {
      if(obj[it]) {
        return it = obj[it]
      }else {
        return it = it
      }
    }).join("")
  },
  upperFirst: function(string) {
    return string[0].toUpperCase() + string.slice(1)
  },
  constant: function(value) {
    return function() {
      return value
    }
  },
  defaultTo: function(value, defaultValue) {
    if(!this.isNaN(value) || this.isNull(value) || this.isUndefined(value)) {
      return defaultValue
    }
  },
  identity: function(value) {
    return value
  },
  noop: function() {
    return undefined
  },
  nthArg: function(n = 0) {
    return function(...args) {
      if(n > 0) {
        return args[n]
      }else {
        return args[args.length + n]
      }
    }
  },
  property: function(path) {
    let self = this
    return function(item) {
      return self.get(item, path)
    }
  },
  stubArray: function() {
    return []
  },
  stubFalse: function() {
    return false
  },
  stubObject: function() {
    return {}
  },
  stubString: function() {
    return ""
  },
  stubTrue: function() {
    return true
  },
  times: function(n, fn) {
    let arr = []
    for(let i = 0; i < n; i++) {
      arr.push(fn(i))
    }
    return arr
  },
  toPath: function(path) {
    return Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".")
  },
  uniqueId: function(prefix = "") {
    let str = new Date().getTime()
    return prefix + str
  }
}




