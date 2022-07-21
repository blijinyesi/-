//  封装双向链表
function DoublyLinkedList() {
  //  内部类：节点类
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  // 属性
  this.head = null
  this.tail = null
  this.length = 0

  // 1 append 追加方法
  DoublyLinkedList.prototype.append = function (data) {
    var newNode = new Node(data)
    // 判断是否添加的是第一个节点
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
      //   console.log(newNode)
    } else {
      let previous = this.tail
      previous.next = newNode // 将原来最后一个节点的next的指向指向要添加的节点newNode
      newNode.prev = previous // 将要添加的新节点的子节点prev等于原来节点的prev
    }
    this.tail = newNode //将tail的值更新成新节点newNode 即完成新节点的添加
    this.length += 1
  }

  // 2 将链表转成字符串的形式
  // 2.1 toString 方法 (调用了backeardString方法)
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString()
  }

  // 2.2 forwardString 方法
  DoublyLinkedList.prototype.forwardString = function () {
    let current = this.tail
    let res = ' '

    // 依次向前遍历，获取每一个节点
    while (current != null) {
      res += current.data + ' '
      current = current.prev
    }
    return res
  }

  // 2.3 backwardString 方法
  DoublyLinkedList.prototype.backwardString = function () {
    let current = this.head
    let res = ' '

    // 依次向后遍历，获取每一个节点
    while (current != null) {
      res += current.data + ' '
      current = current.next
    }
    return res
  }

  // 3 insert 方法 随机插入节点
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 越界判断
    if (position < 0 || position > this.length) return false

    // 创建新节点
    let newNode = new Node(data)

    // 里面没有节点时
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position == 0) {
        //从第一个位置插入时
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position == this.length) {
        //从最后一个位置插入时
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      } else {
        //其他情况
        let current = this.head
        index = 0
        while (index < position) {
          current = current.next
          index++
        }
        // 修改指针
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true
  }

  // 4 get 方法
  DoublyLinkedList.prototype.get = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null

    // 获取元素
    let current = this.head
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    return current.data
  }

  // 5 indexOf 方法
  DoublyLinkedList.prototype.indexOf = function (data) {
    let current = this.head
    let index = 0

    // 查找和data相同的节点
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
  DoublyLinkedList.prototype.update = function (position, newData) {
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
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null

    // 删除节点
    let current = this.head
    if (this.length == 1) {
      this.head = null
      this.tail = null
    } else {
      if (position == 0) {
        //第一个位置
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position == this.length - 1) {
        //最后一个位置
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let index = 0
        while (index < position) {
          current = current.next
          index++
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length -= 1
    return current.data
  }

  // 8 remove 方法(调用了之前的俩个方法)
  DoublyLinkedList.prototype.remove = function (data) {
    // 根据data取下标用indexOf
    let index = this.indexOf(data)

    // 根据index删除对应的位置的节点用removeAt
    return this.removeAt(index)
  }

  // 9 isEmpty方法
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length == 0
  }

  // 10 size 方法
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  // 11 获取链表的第一个元素
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }

  // 12 获取链表的最后一个元素
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data
  }
}

let list = new DoublyLinkedList()

// 测试添加方法

list.append('0-aaa')
list.append('1-azx')
list.append('2-avn')
list.append('3-abc')
list.append('4-sad')
list.append('5-awe')

// let update = list.update(1, 'a')

// list.insert(0, 'kfc')

// list.insert(7, 'uzi')

// list.insert(4, 'mcd')

// let update = list.update(1, 'a')

// let remove = list.remove('0-aaa')

// let removeAt = list.removeAt(1)

let toString = list.toString()

let isEmpty = list.isEmpty()

let size = list.size()

let getHead = list.getHead()

let getTail = list.getTail()

// let forward = list.forwardString() //从后向前遍历 倒序

// let backward = list.backwardString() // 从前向后遍历 顺序

// let get = list.get(7)

// let indexOf = list.indexOf('kfc')

// console.log(list)

// console.log(toString)

// console.log(get)

// console.log(forward)

// console.log(backward)

// console.log(indexOf)

// console.log(removeAt)

// console.log(update)

// console.log(remove)

console.log(isEmpty)

console.log(size)

console.log(getHead)

console.log(getTail)

console.log(toString)
