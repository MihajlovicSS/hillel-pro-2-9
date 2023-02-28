'use strict'

function Calculator(base) {
    this.currentCount = base
    this.add = function(number){
        if(!isNaN(number)) this.currentCount += number
    }
    this.sub = function(number){
        if(!isNaN(number)) this.currentCount -= number
    }
    this.set = function(newBase){
        if(!isNaN(newBase)) this.currentCount = newBase
    }
    this.get = function(){
        return this.currentCount
    }
    this.reset = function(){
        this.currentCount = base
    }
}

const calc = new Calculator(100)