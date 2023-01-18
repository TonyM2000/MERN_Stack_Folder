class ninja {
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3

    }

    sayname() {
        console.log(this.name)
    }

    showstats() {
        console.log("Health is ",this.health)
        console.log("Strength is ",this.strength)
        console.log("Speed is ",this.speed)
    }
    drinksake() {
        console.log(this.name,"took a swig of sake")
        this.health+=10
    }
}
class sensei extends ninja {
    constructor(name){
        super(name, 200)
        this.wisdom = 10
        this.strength = 10
        this.speed = 10
    }
    speakwisdom() {
        super.drinksake();
        console.log("King of the castle I have a chair")
    }
    showstats() {
        console.log("Health is ",this.health)
        console.log("Strength is ",this.strength)
        console.log("Speed is ",this.speed)
        console.log("Wisdom is ",this.wisdom)
    }
}
const ninja1 = new ninja('Grace',10)
console.log(ninja1.health)
ninja1.sayname()
ninja1.showstats()
ninja1.drinksake()
ninja1.showstats()
const borat = new sensei('Borat')
borat.sayname()
borat.showstats()
borat.speakwisdom()
borat.showstats()