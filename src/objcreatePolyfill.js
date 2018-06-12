if (typeof Object.create !== 'function') {
    Object.create =function(o) {
        function F() {}
        F.prototype = o
        return new F()
    }
}
//3-4包含工厂方法的Person对象
var Person = {
    firstName: 'John',
    lastName: 'Connolly',
    brithDate: new Date('1964-09-05'),
    gender: 'male',
    getAge: function () {
        var today = new Date();
        var diff = today.getTime() - this.brithDate.getTime();
        var year = 1000 * 60 * 60 * 24 * 365.25;
        return Math.floor(diff / year);
    },
    toString: function () {
        return this.firstName + '' + this.lastName + 'is a' + this.getAge() + 'year-old' + this.gender
    },
    extend:function(config) {
        var tmp = Object.create(this)
        for (var key in config) {
            if(config.hasOwnProperty(key)) {
                tmp[key] = config[key]
            }
        }
        return tmp 
    }
}
var bob = Person.extend({
    firstName: 'Bob',
    lastName: 'Sabatelli',
    brithDate: new Date('1969-06-07')
})
console.log(bob.toString())