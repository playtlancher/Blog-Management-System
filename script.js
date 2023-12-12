class Post{
    postTitle;
    postText;
    postTime;
}
let spanDiv = document.getElementById("postDiv");
function post(form){
    let div = document.createElement("div");
    let editingButtonVisible = document.createElement("button");
    editingButtonVisible.style.width = "100px"; 
    editingButtonVisible.style.height = "40px";
    editingButtonVisible.textContent = "Edit";
    let editingBar = document.createElement("input");
    editingBar.style.display = "none";
    let editingButton = document.createElement("button");
    editingButton.style.display = "none";
    editingButton.style.width = "100px"; 
    editingButton.style.height = "40px";
    editingButton.textContent = "Confirm";
    let removeButton = document.createElement("button");
    removeButton.style.width = "100px"; 
    removeButton.style.height = "40px";
    removeButton.textContent = "Remove";
    let formPost = new Post();
    let date = new Date();
    formPost.postTitle = form.postTitle.value;
    formPost.postText = form.postText.value;
    formPost.postTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    div.innerHTML = `<div><strong>${formPost.postTitle}</strong></div>
    <div>${formPost.postText}</div>
    <div>${formPost.postTime}</div>`;
    removeButton.addEventListener("click" , function() {
        spanDiv.removeChild(div);
        spanDiv.removeChild(removeButton);
        spanDiv.removeChild(editingButtonVisible);
        spanDiv.removeChild(editingButton);
        spanDiv.removeChild(editingBar);
    });
    editingButtonVisible.addEventListener("click" , function() {
        editingButtonVisible.style.display = "none";
        editingButton.style.display = "block";
        editingBar.style.display = "block";
        editingBar.value = formPost.postTitle + " ; " + formPost.postText;
    })
    editingButton.addEventListener("click", function(){
        editingButtonVisible.style.display = "block";
        editingButton.style.display = "none";
        editingBar.style.display = "none";
        let editingText = [];
        editingText = editingBar.value.split(";");
        formPost.postTitle = editingText[0];
        formPost.postText = editingText[1];
        div.innerHTML = `<div><strong>${formPost.postTitle}</strong></div>
        <div>${formPost.postText}</div>
        <div>${formPost.postTime}</div>`;
    })
    spanDiv.appendChild(div);
    spanDiv.appendChild(removeButton);
    spanDiv.appendChild(editingButtonVisible);
    spanDiv.appendChild(editingBar);
    spanDiv.appendChild(editingButton);
    return false;
}