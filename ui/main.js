var button = document.getElemnetById('counter');
var counter = 0;

button.onClick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = count.toString();
};