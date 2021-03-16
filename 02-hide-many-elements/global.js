window.addEventListener('load', function(){
    const hide_me = document.getElementsByClassName("hide_me");
    const button = document.getElementById("button");
    console.log('page is loaded')

    button.addEventListener('click', function(){
        Array.from(hide_me).forEach((elements) => {
            elements.style.display = "none";
        })
    });
});