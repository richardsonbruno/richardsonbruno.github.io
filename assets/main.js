(function(){
    document.querySelector("#btnMenu").addEventListener("click", function(event){
        this.classList.toggle("active");
        document.querySelector("nav.header-nav").classList.toggle("active");
    });
})();