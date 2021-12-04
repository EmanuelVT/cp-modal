let modalButton = document.querySelector(".modal-button");
let path = document.getElementsByClassName("path-header-container");

//Loop to make dropdown menus work
for(var i = 0; i < path.length; i++){
    path[i].onclick = function(){
        let content = this.nextElementSibling;
        if(content.style.display == 'block'){
            content.style.display = 'none'
        } else{
            content.style.display = 'block';
        }
    }
}


//Button to make modal appear
modalButton.onclick = function(){
    let modal = document.querySelector(".path-modal");
    if(modal.style.right == ''){
        modal.style.right = '0'
    } else {
        modal.style.right = ''
    }

}




