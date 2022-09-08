function Set() {
  // 属性
  this.items = {}

  //方法
  // 1 add方法
  Set.prototype.add = function (value) {
    //   判断里面是否有值
    if (this.has(value)) {
      return false
    }
    // 将元素添加到集合中
    this.items[value] = value
    return true
  }

  // 2 has 方法
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  // 3 remove 方法
  Set.prototype.remove = function (value) {
    // 判断里面是否包含该元素
    if (!this.has(value)) {
      return false
    }
    //  将该元素从属性中删除
    delete this.items[value]
    // console.log(this.items[value])
    return true
  }

  // 4 clear 方法
  Set.prototype.clear = function () {
    this.items = {}
  }

  // 5 size 方法
  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }

  // 6 获取集合所有值
  Set.prototype.values = function () {
    return Object.keys(this.items)
  }

  /*  
  集合间的操作
  并集 
  */
  Set.prototype.union = function (otherSet) {
    // this:集合对象A
    // otherSet:集合对象B
    // 创建新集合
    var unionSet = new Set()
    //  将A集合中所有元素添加到新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    // 取出B集合中所有元素，判断是否需要加入到新集合中
    values = otherSet.values()
    for (var j = 0; j < values.length; j++) {
      unionSet.add(values[j])
    }
    return unionSet
  }

  /* 
  集合间操作
  交集
  */
  Set.prototype.intersection = function (otherSet) {
    // 1.创建新的集合
    var intersection = new Set()

    // 2.从A中取出一个个元素，判断是否同时存在于集合B中，存在放入新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (otherSet.has(item)) {
        intersection.add(item)
      }
    }
    // 3.返回新集合
    return intersection
  }

  /* 
  集合间操作
  差集
  */
  Set.prototype.difference = function (otherSet) {
    // 1.创建新的集合
    var differenceSet = new Set()

    // 2.从A中取出一个个元素，判断是否同时存在于集合B中，不存在于B中，则添加到新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }
    // 3.返回新集合
    return differenceSet
  }

  /* 
  集合间操作
  差集
  */
  Set.prototype.subset = function (otherSet) {
    // this:集合A
    // otherSet:集合B
    // 遍历集合A中所有的元素，如果发现A中的元素，在集合B中不存在，返回false
    // 如果遍历完了整个集合，依然没有返回false，就返回true
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (!otherSet.has(item)) {
        return false
      }
    }
    return true
  }
}

let set = new Set()

// add方法 （向集合中添加元素，添加相同的值只会出现一个）
set.add('0-abc')
set.add('1-asf')
set.add('2-fdg')
set.add('3-esr')
set.add('4-sdf')

/*
// 测试has(判断集合中是否有相对应的元素)
let has0 = set.has('0-abc')
let has1 = set.has('1-abc')
let values = set.values()
console.log(values)
console.log(has0)             // true
console.log(has1)             // false 


 // 测试remove(删除集合中的元素)
 let remove = set.remove('4-sdf')
 let values = set.values()
 console.log(values)           // [ '0-abc', '1-asf', '2-fdg', '3-esr' ] 
 

 // 测试clear(清除集合中所有元素)
 let clear = set.clear()
 let values = set.values()
 console.log(values)           // []
 

// 测试 size(集合的长度)
 let size = set.size()
 console.log(size)             // 5
 

// 测试 values(查看集合的所有元素)
 let values = set.values()
 console.log(values)           // [ '0-abc', '1-asf', '2-fdg', '3-esr', '4-sdf' ]

// 测试集合间并集的操作
let setB = new Set()
setB.add('0-sfs')
setB.add('1-sad')
setB.add('2-ret')
setB.add('3-esr')
setB.add('4-sdf')

var unionSet = set.union(setB)
console.log(unionSet.values()) //  ['0-abc', '1-asf','2-fdg', '3-esr','4-sdf', '0-sfs','1-sad', '2-ret']
 */

// 测试集合间交集的操作
/* let setB = new Set()
setB.add('0-sfs')
setB.add('1-sad')
setB.add('2-ret')
setB.add('3-esr')
setB.add('4-sdf')

var intersectionSet = set.intersection(setB)
console.log(intersectionSet.values()) //[ '3-esr', '4-sdf' ] */

// 测试集合间差集的操作
/* let setB = new Set()
setB.add('0-sfs')
setB.add('1-sad')
setB.add('2-ret')
setB.add('3-esr')
setB.add('4-sdf')

var difference = set.difference(setB)
console.log(difference.values()) //[ '0-abc', '1-asf', '2-fdg' ] */

// 测试集合间子集的操作
/* let setB = new Set()
setB.add('0-abc')
setB.add('1-asf')
setB.add('2-fdg')
setB.add('3-esr')
setB.add('4-sdf')
setB.add('5-sdf')
console.log(set.subset(setB)) // A集合是B集合的子集返回 true */

/* let setB = new Set()
setB.add('0-abc')
setB.add('1-asf')
setB.add('3-esr')
setB.add('4-sdf')
setB.add('5-sdf')
console.log(set.subset(setB)) // A集合不是B集合的子集返回 false */
