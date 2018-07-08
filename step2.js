/**
 * Created by Andrey on 08.07.2018.
 */
//ES5
    
function User(name, age) {
    name = name || 'По умолчанию';
    //Проверки

    // this.name = name;

    function getAge() {
        return age;
    }
    function setAge(ageTmp){
        if(ageTmp > 18 && ageTmp <= 100){
            age = ageTmp;
        } else {
            console.log('Ошибка в возрасте');
        }
    }
    this.getAge = getAge;
    this.setAge = setAge;
}

var vasy = new User('Василий', 25);
console.log(vasy);
vasy.setAge(37);
console.log(vasy.age);
console.log(vasy.getAge());

var alex = new User('Алексей', 32);
console.log(alex);
console.log(alex.getAge());

// замыкание

function count() {
    var i = 0;

    return function(){
        return ++i;
    }
}

m = count();
console.log(m());
console.log(m());
console.log(m());

n = count();
console.log(n());
console.log(n());


