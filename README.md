# ProJavascript
《Pro Javascript Techniques,Second Edition》 读书笔记
 第三章，创建可重用代码
 shim和polyfill
    在JavaScript的世界里,有两个词经常被提到,shim和polyfill.它们指的都是什么,又有什么区别?
    一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现
    一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否支持某个API,如果不支持的话就加载对应的polyfill.然后新旧浏览器就都可以使用这个API了.术语polyfill来自于一个家装产品Polyfilla:
    Polyfilla是一个英国产品,在美国称之为Spackling Paste(译者注:刮墙的,在中国称为腻子).记住这一点就行:把旧的浏览器想象成为一面有了裂缝的墙.这些[polyfills]会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁(浏览器)
    Paul Irish发布过一个Polyfills的总结页面“HTML5 Cross Browser Polyfills”.es5-shim是一个shim(而不是polyfill)的例子,它在ECMAScript 3的引擎上实现了ECMAScript 5的新特性,而且在Node.js上和在浏览器上有完全相同的表现(译者注:因为它能在Node.js上使用,不光浏览器上,所以它不是polyfill).
.hasOwnProperty()
    Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
判断自身属性是否存在
instanceof 
    instanceof  可以用来确定一个对象是否是某种类型的实例，右操作数必须为函数（绝大部分情况下是函数构造器）
    var oStringObject = new String("hello world"); 
    console.log(oStringObject instanceof String);   // 输出 "true"
    // 判断 foo 是否是 Foo 类的实例
    function Foo(){} 
    var foo = new Foo(); 
    console.log(foo instanceof Foo)//true
.isPrototypeOf()
    xx..isPrototypeOf(a)
    a 是xx的实例
.getPrototypeOf()
    返回当前对象的原型，可以通过查看_proto_属性
    console.log(Object.getPrototypeOf(a)) 获得a对象的原型


