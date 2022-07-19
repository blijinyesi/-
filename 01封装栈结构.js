//封装栈类
function Stack() {
  // 栈属性
  this.items = []
  // 栈方法：2种方式

  // 第一种：不利于节约内存，不是面向对象思想，给对象实例添加方法，这叫做私有方法
  // this.push = function(element){
  // this.items.push(element)
  // }
  // 第二种：基于原型属性prototype上来点出方法，给整个类添加方法 公共方法，共享方法节省内存提高效率
  //Stack.prototype.push = function(){}

  //栈的相关操作
  // 1 将栈元素压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element)
  }
  // 2 从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop()
  }

  // 3 查看栈顶元素
  // Stack.prototype.peek = function () {
  // return this.items[this.items.length - 1]
  // }

  // 4 判断是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0
  }

  // 5 获取栈中元素个数
  // Stack.prototype.size = function () {
  // return this.items.length
  // }

  // // 6 toString方法
  // Stack.prototype.toString = function () {
  // var resultString = ''
  // for (var i = 0; i < this.items.length; i++) { // resultString +=this.items[i] + ' ' // } // return resultString // }
} // var s=new Stack() // s.push(1) // s.push(20) // s.push(10) // s.push(8) // s.push(7) // alert(s) // s.pop() //
alert(s) // alert(s.peek()) // alert(s.isEmpty()) // alert(s.size()) // 栈的应用 十进制转二进制 function dec2bin(decNumber){ //
// 1. 定义栈对象
var stack = new Stack() // 2.循环操作 while(decNumber>0){
// 2.1 获取余数，并且放入到栈中
stack.push(decNumber % 2)
// 2.2 获取整除后的结果，作为下一次运行的数字
decNumber = Math.floor(decNumber / 2)

// 3从栈中取出0和1
var binaryString = ''

while (!stack.isEmpty()) {
  binaryString += stack.pop()
}

return binaryString

// alert(dec2bin(100))
console.log(dec2bin(100))

// alert(dec2bin(1000))
console.log(dec2bin(1000))
