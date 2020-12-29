## `Vue`核心知识点

#### 1. `Vue`编程的核心思想

#####    1.1  什么是响应式编程呢？

​		数据驱动试图的思想方式就是响应式编程。数据发生改变页面也会随之发生改变的方式就是响应式编程。

#####    1.2   `Vue` 中采用的是声明式编程的方式。

​		插值表达式就是的执行过程就是声明式编程的一个体现。

​		以`{{message}}` 为例 简述声明式编程的执行过程：

​       （1）从上到下 刚开始执行到`{{message}}` 的时候 还是只会显示`{{message}}`

​         (2)  当加载到`vue`的时候 就会把`{{message}}`插值表达式交给`Vue`去管理

​      （3） Vue会找到挂载点 并在data中找到该变量 并通过响应式显示出来

#### 2.`Vue`指令

#####     2.1 `v-once`指令

​     	`v-once`指令：只加载一次 之后data数据源发生改变，页面上渲染的数据也不会改变了

#####      2.2 `v-html`指令

​	    `v-html`指令：如果页面上要显示一个html标签 比如要显示一个a链接  使用`v-html`指令可以正常的解析出a		 链接，其他html标签也可以正确的解析出来

#####     2.3 `v-text`指令

​		`v-text`指令可以正确的显示出data中的数据和插值表达式的作用类似

​		但是插值表达式比`v-text` 更为方便实用   插值表达式可以拼接字符串 也可以拼接插值表达式

​		但是v-text只能不能实现 只能显示data中的数据

#####     2.4 `v-pre`指令

​		`v-pre` 指令 使得插值表达式不渲染出来。`Vue`会默认的渲染{{}} 但是如果就是想要显示`{{message`

​        就可以加上`v-pre`指令 感觉这个功能好像没啥用途

#####    2.5 `v-cloak`指令

​     当网络较慢时，网页还在加载`Vue.js` 而导致`Vue`来不及渲染，这时页面就会显示出Vue源代码。

​	  我们可以使用`v-cloak`来解决这一问题。

#### 3.`v-bind`动态绑定属性

##### 	3.1 `v-bind`  属性绑定

有的时候一些属性的值可以不用写在标签上，可以动态的绑定到属性上。

   ```javascript
 <img v-bind:src="imgUrl">
 imgUrl: "http://www.baidu.com"
 当然绑定属性也可以有语法糖，可以使用 v-bind:src  -->  :src
   ```

#####      3.2 绑定class

​    class 绑定属性对象的语法

````html
<h2 v-bind:class="{active: isActive,line: isLine}">{{message}}</h2>
````

​    class方法语法

````html
<h2 v-bind:class="getClasses()"></h2>
methods: {
	getClasses() {
		return .......
   }
}
````

class数组的语法

````html
<h2 :class="['active','line']"></h2>
````

动态加静态class结合的方式

````html
<h2 class="title" :class="['active','line']"></h2>
````

这种动态数组的方式绑定class感觉根本没啥作用。动不动态感觉都没啥关系了 体会不到动态的好处了

#####  3.3 动态属性style

​     动态属性style中的对象的值是以key:value的形式

   ````javascript
 :style="{fontSize: '100px'}"
   ````

#### 4.计算属性

计算属性是用于将其他的属性经过一些操作计算成为一个新的属性的过程。

注意： 计算属性是一个属性，直接使用就可以了 不用加水小括号

##### 4.1 计算属性是setter和getter

````javascript
computed: {
    fullName: {
         set: function() {},
         get: function() {
               return 'abc';
          }
    }
}
计算属性一般不能让外界更改的属性。所以一般会省略掉setter 计算属性一般就是只读属性。
//以上代码等价于
computed: {
    fullName: function() {
        return 'abc';
    }
}
````

##### 4.2 计算属性和methods对比

 计算属性可以实现的功能methods也可以实现 为什么要使用计算属性呢？

 因为computed的性能更好。method是调用几次 就执行几次

computed只会执行一次 计算属性有缓存 性能更好  计算属性会观察是否发生变化 

如果没有发生变化 就会缓存下来 不会再重新调用了

#### 5.事件监听

##### 5.1 事件调用参数问题

````html
<button @click="handleClick">按钮1</button>
1.事件调用没有参数  会默认传递一个event参数
<button @click="handleClick()">按钮2</button>
2.事件调用有() 那么就没有参数了
<button @click="handleClick(123，$event)">按钮3</button>
3.如果需要特地传递event参数 那么就需要使用$event参数调用
````

##### 5.2 事件调用修饰符

````html
  <!-- 1.阻止事件向上冒泡 -->
<div @click="handleClick1">大事件
     <!-- 1.stop修饰符的使用 -->
     <button @click.stop="handleClick2">小事件</button>
 </div>
  <!-- 2.prevent阻止事件的默认行为 -->
 2.<form action="baidu.com">
      <input type="submit" value="提交" @click.prevent="handleSubmit">
   </form>
  <!-- 3.监听某个键盘的键帽 -->
  <input type="text" @keyup.enter="keyup">
 <!-- 4.once只触发一次 -->
 <button @click.once="handleOnce">once..</button>

````

