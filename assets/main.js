(function(){
    document.querySelector("#btnMenu").addEventListener("click", function(event){
        this.classList.toggle("active");
        document.querySelector("nav.header-nav").classList.toggle("active");
    });

    document.querySelectorAll(".header-nav-link").forEach(function(index){

        index.addEventListener("click", function(event) {
            event.preventDefault();
            let hash = this.hash.substr(1);
            let block = document.querySelector(`.${hash}`);

            document.querySelectorAll(".header-nav-link").forEach(function(index){
                index.classList.remove("active");
            });

            this.classList.add("active");
            
            document.querySelectorAll(".block").forEach(function(index){
                index.classList.remove("bounceOut", "bounceIn");
                index.classList.add("bounceOut");
                block.classList.remove("bounceOut");
                block.classList.add("bounceIn");
            });

        });
    });
})();