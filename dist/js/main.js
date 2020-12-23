const  toggleClass = (e) => {
    let parentElement = e.parentNode.offsetParent;
    if (e.checked){       
        parentElement.classList.add("selectedCard");
    }
    else{
        parentElement.classList.remove("selectedCard");
    }
}
