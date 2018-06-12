// 3.1 Person对象
var Person = {
    firstName:'John',
    lastName:'Connolly',
    brithDate:new Date('1964-09-05'),
    gender:'male',
    getAge:function() {
        var today = new Date();
        var diff = today.getTime() - this.brithDate.getTime();
        var year = 1000*60*60*24*365.25;
        return Math.floor(diff/year);
    }
}
// 3.2 创建Person实例
var Persona = {
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
    toString:function() {
        return this.firstName + '' +this.lastName + 'is a' +this.getAge() +'year-old' +this.gender
    }
};
var bob = Object.create(Persona);
bob.firstName = 'Bob';
bob.lastName = 'Sabatelli';
bob.brithDate = new Date('1969-06-07');
console.log(bob)
console.log(bob.toString())