if (typeof Object.create !== 'function') {
    Object.create =function(o) {
        function F() {}
        F.prototype = o
        return new F()
    }
}
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
    entend:function(config) {
        var tmp = Object.create(this)
        for (var key in config) {
            if(config.hasOwnProperty(key)) {
                tmp[key] = config[key]
            }
        }
        return tmp 
    }
}