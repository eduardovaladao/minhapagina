console.log("Hello World!");

class MobileMenu {
    constructor() {
        this.body = document.querySelector(".mobile-menu");

        this.escape = this.body.querySelector(".escape")

        this.menuList = this.body.querySelector(".mobile-menu-list");

        this.listItems = this.menuList.querySelectorAll("li a");

        this.menuHamburguer = document.querySelector(".menu-hamburguer");

        this.active = "active";

        this.mobileMenuClasses = this.body.classList;
    }

    addOnClickEvents() {
        this.menuHamburguer.addEventListener("click", () => {
            this.mobileMenuClasses.add(this.active);
        });

        this.escape.addEventListener("click", () => {
            this.mobileMenuClasses.remove(this.active);
        });

        this.listItems.forEach((element) => {
            element.addEventListener("click", () => {
                this.mobileMenuClasses.remove(this.active);
            });
        });
    }

    onResize() {        
        window.addEventListener("resize", () => {
            if (this.mobileMenuClasses.contains(this.active) && document.body.clientWidth >= 480) {
                console.log("oi");
                this.mobileMenuClasses.remove(this.active);
            }
        });
    }

    start() {
        console.log("Mobile Menu -> class:\n\n", this);
        if (this.body) {
            console.log("OK 👌");
            this.addOnClickEvents();
            this.onResize();
        }
    }
}

const mobileMenu = new MobileMenu();

mobileMenu.start();