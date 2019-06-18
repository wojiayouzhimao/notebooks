function observe (data) {
    if (!data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach((key) => {
        defineReactive(data, key, data[key])
    })
}
function defineReactive (data, key, val) {
    var dep = new Dep()
    observe(val)
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        get: function () {
            Dep.target && dep.addSub(Dep.target)
            return val
        },
        set: function (value) {
            if (val === value) {
                return
            }
            val = value
            dep.notify()
        }
    })
}
function Dep () {
    this.subs = []
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub)
    },
    notify: function () {
        this.subs.forEach((sub) => {
            sub.update()
        })
    }
}