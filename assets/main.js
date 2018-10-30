(function(){
    document.querySelector("#btnMenu").addEventListener("click", function(event){
        this.classList.toggle("active");
        document.querySelector("nav.header-nav").classList.toggle("active");
    });

    document.querySelectorAll(".header-nav-link").forEach(function(index){

        index.addEventListener("click", function(event) {
            event.preventDefault();

            document.querySelectorAll(".header-nav-link").forEach(function(index){
                index.classList.remove("active");
            });

            this.classList.add("active");
            
            document.querySelectorAll(".block").forEach(function(index){
                index.classList.remove("bounceOut", "bounceIn");
            });

            let hash = this.hash.substr(1);
            switch(hash){
                case 'home':
                    document.querySelector(".about").classList.add("bounceOut");
                    document.querySelector(".home").classList.add("bounceIn");
                    break;
                
                case 'about':
                    document.querySelector(".home").classList.add("bounceOut");
                    document.querySelector(".about").classList.add("bounceIn");
                    break;

                case 'skill':
                    console.log('skill foi');
                    break;

                case 'works':
                    console.log('about foi');
                    break;

                case 'contacts':
                    console.log('contacts foi');
                    break;
            }
        });
    });
})();