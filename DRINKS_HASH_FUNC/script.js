function HashStorageFunc (){
    this.storage = {};
    this.addValue = function(key,value){
        this.storage[key]=value;
    }
    this.getValue = function(key){
          return this.storage[key];
    }
    this.deleteValue = function(key){
        if(key in this.storage){
            delete this.storage[key];
            return "напиток удален успешно";
        }
        return 'такого напитка нету';
    }
    this.getKeys = function(){
        return Object.keys(this.storage);
    }
}

let drinkStorage = new HashStorageFunc;
let btn1 = document.getElementById('btn1');
btn1.onclick = function() {
    let nameDrink = prompt('Введите название напитка');
    let alcoDrink = confirm('Напиток алкогольный?');
    let recipeDrink = prompt('Введите рецепт приготовления');
    return drinkStorage.addValue(nameDrink,{alco:alcoDrink,rec:recipeDrink});
};

let btn2 = document.getElementById('btn2');
btn2.onclick = function() {
    let nameDrink = prompt('Введите название напитка');
    let info = drinkStorage.getValue(nameDrink);
        if(info.alco){
            alert(`Название напитка: ${nameDrink}\n алкогольный: да\n рецепт приготовления: ${info.rec}`) 
        }
        else{
            alert(`Название напитка: ${nameDrink}\n алкогольный: нет\n рецепт приготовления: ${info.rec}`)
        }
    }

let btn3 = document.getElementById('btn3');
btn3.onclick = function() {
    let nameDrink = prompt('Введите название напитка');
    let i = drinkStorage.deleteValue(nameDrink);
    alert(i);
};

let btn4 = document.getElementById('btn4');
btn4.onclick = function() {
    let j = drinkStorage.getKeys();
    alert(j)
};

