/**
 * Created by Andrey on 08.07.2018.
 */
//ES5
var vasy, alex;
function user(name) {
    name = name || 'По умолчанию';
    vasy = name;
}

function user2(name) {
    name = name || 'По умолчанию';
    alex = name;
}

function userall(name) {
    name = name || 'По умолчанию';
    return name;
}


user('Василий');
user2('Алексей');
vasy = userall('Василий');
alex = userall('Алексей');
console.log(vasy);
console.log(alex);