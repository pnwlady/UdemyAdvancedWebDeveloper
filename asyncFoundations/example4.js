//callback with anonymous function instead of declarations
function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

greet("Tim", function(name) {
    return name.toUpperCase();
});
//returns "Hello, TIM"

greet("Tim", function(name) {
    return name + "!!!!!";
});
//returns "Hello, Tim!!!!!!"
