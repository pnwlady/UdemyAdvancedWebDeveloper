//Callback example
function sendMessage(message, callback) {
    return callback(message);
}

sendMessage("Message for console", console.log);
//prints to console

sendMessage("Message for alert", alert);
//should create alert message (didn't work in chrome developer console)

var answer = sendMessage("Are you sure?", confirm);
//alert "from embedded page" message on webpage requiring button okay button click
