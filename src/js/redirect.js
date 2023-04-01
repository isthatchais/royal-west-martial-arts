let load = 0;
document.getElementById('redirect').onload = function(){
    load += 1;
    if (load > 1){
        document.location = '/thanks/index.html'
    }
}