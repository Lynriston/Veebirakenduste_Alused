//soovin näidata ainult name ja age, aga võetakse kogu objekti sisu
//kuna kasutatakse User type
function renderUserDetail(user) {
    console.log(user.name, user.age);
}
function renderUserDetail1(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};
renderUserDetail(user);
renderUserDetail1({ name: "Nipitiri", age: 123 });
//omit kasutamine tähendab properti eemaldamist User typest
function createUser(User) {
    console.log(User.name, User.age);
}
createUser({ name: "Ironman", age: 567, address: { street: "asd", city: "asdcity" } });
