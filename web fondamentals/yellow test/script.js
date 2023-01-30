function like(e){
    document.getElementById(e).innerText ++;
}

function like2(id){
    var likeId="#"+id;
    document.querySelector(likeId).innerText ++;
}


function remove(id){
    alert("kkkk")
    document.getElementById(id).remove();
}
