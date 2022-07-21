// 封装单向链表结构
function LinkedList() {
  // 内部类：节点类
  function Node(data) {
    this.data = data
    this.next = null
  }
  // 属性
  this.head = null
  this.length = 0

  // 1 追加方法
  LinkedList.prototype.append = function (data) {
    // 创建新节点
    let newNode = new Node(data)

    // 判断是否是添加的第一个节点
    if (this.length == 0) {
      this.head = newNode
    } else {
      // 找到最后一个节点
      let current = this.head //这一步表示指向的是第一个节点即this.head = null
      while (current.next != null) {
        current = current.next
      }
      // 最后节点的next指向新的节点
      current.next = newNode
    }
    this.length += 1
  }

  // 2 toString方法
  LinkedList.prototype.toString = function () {
    let current = this.head
    let listString = ''

    // 循环获取一个个的节点
    while (current) {
      listString += current.data + ' '
      current = current.next
    }
    return listString
  }

  // 3 insert方法
  LinkedList.prototype.insert = function (position, data) {
    // 对position进行越界判断
    if (position < 0 || position > this.length) return false

    // 根据 data 创建newNode
    let newNode = new Node(data)

    // 判断插入的位置是否是第一个
    if (position == 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null //如果index小于opsition那就一直找，直到找到我们自己设置current变量
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current // 此时 我们需要把 newNode.next 的值指向 current，然后把 previous.next 的值设为 newNode。这样列表中就有了一个新元素。
      previous.next = newNode
    }
    this.length += 1
    return true
  }

  // 4 get 方法
  LinkedList.prototype.get = function (position) {
    // 位置信息越界判断
    if (position < 0 || position >= this.length) return null

    // 获取对应的data
    let current = this.head
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    return current.data
  }

  // 5 indexOf 方法
  LinkedList.prototype.indexOf = function (data) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }

  // 6 update 方法
  LinkedList.prototype.update = function (position, newData) {
    // 越界判断
    if (position < 0 || position >= this.length) return false

    // 查找正确的节点
    let current = this.head
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }

    // 将position位置的node的data修改成newData
    current.data = newData
    return true
  }

  // 7 removeAt 方法
  LinkedList.prototype.removeAt = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null

    // 判断是否删除的是第一个节点
    let current = this.head
    if (position == 0) {
      this.head = this.head.next
    } else {
      let index = 0
      let previous = null
      while (index < position) {
        previous = current
        current = current.next
        index++
      }
      //  前一个节点的next指向后一个节点的current.next即可完成删除节点
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }

  // 8 remove 方法
  LinkedList.prototype.remove = function (data) {
    //  获取data在列表中的位置
    let position = this.indexOf(data)

    // 根据位置信息，删除节点
    return this.removeAt(position)
  }

  // 9 isEmpty方法
  LinkedList.prototype.isEmpty = function () {
    return this.length == 0
  }

  // 10 size 方法
  LinkedList.prototype.size = function () {
    return this.length
  }
}

//测试代码
let list = new LinkedList()

list.append('abc')
list.append('cdf')
list.append('nba')
list.append('nmk')

list.insert(0, 'kfc')
list.insert(1, 'mcd')

let indexOf = list.indexOf('sdfs')

let update = list.update(0, 'mlxg')

// let get = list.get(5)

// let removeAt = list.removeAt(2)

// let get = list.get(2)

// let toString = list.toString()

// let remove = list.remove('nba')

let toString = list.toString()

console.log(toString)

// console.log(list)
// console.log(get)
// console.log(indexOf)

// console.log(update)
// console.log(get)
// console.log(removeAt)

// let isEmpty = list.isEmpty()

// let size = list.size()

// console.log(remove)

// console.log(toString)

// console.log(isEmpty)

// console.log(size)
