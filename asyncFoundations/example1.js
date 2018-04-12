function callback () {
    console.log("coming from callback");
}

function higherOrder(fn) {
    console.log("about to call callback");
    fn();
    console.log("callback has been invoked");
}

higherOrder(callback);

//returns
<!--
about to call callback
coming from callback
callback has been invoked
-->
