// 封装队列类
function Queue() {
    // 属性
    this.items = []
    // 方法

    // 1. 将元素加入到队列中
    Queue.prototype.enqueue = function (element) {   //enqueue 是写入自定义的名称
        this.items.push(element)
    }


    // 2. 从队列中删除前端元素
    Queue.prototype.dequeue = function () {         //dequeue 
        return this.items.shift()
    }


    // 3. 查看前端元素
    Queue.prototype.fornt = function () {
        return this.items[0]
    }

    // 4. 查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0
    }


    // 5. 查看队列中元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }


    // 6. toString方法
    Queue.prototype.toString = function () {
        var resultString = ''
        for (var i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' '
        }
        return resultString
    }
}

// 使用队列

// var queue = new Queue();

// // 将元素加入队列中
// queue.enqueue('malaxiangguo')
// queue.enqueue('uzi')
// queue.enqueue('gogoing')
// queue.enqueue('weixiao')

// // 查看
// // console.log(queue);

// // 将元素从队列中删除
// // queue.dequeue();
// // console.log(queue);
// // queue.dequeue();
// // console.log(queue);

// // front 查看
// console.log(queue.fornt());

// // 验证其它方法
// console.log(queue.isEmpty());
// console.log(queue.size());

// 击鼓传花
function passGame(nameList, num) { 
    
}