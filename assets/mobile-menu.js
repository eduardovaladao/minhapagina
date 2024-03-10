
/*function translatar() {
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
    document.querySelector(".nav-list").classList.toggle("active");
    console.log("ok");
}
*/
$(document).ready(() => {
    console.log("Hello!");
    class MenuHamburguer {
        constructor(nav, mobileMenu, navList, navLinks) {
            this.nav = $(nav);
            this.mobileMenu = $(mobileMenu);
            this.navList = $(navList);
            this.navLinks = $(navLinks);
            this.active = "active";
        }

        addClick() {
            console.log("Ok methods");
            $(this.mobileMenu).click(() => {
                console.log("Ok click");
                $(this.nav).toggleClass(this.active);

                $(this.navList).toggleClass(this.active);

                $(this.mobileMenu).toggleClass(this.active);
            });
        }

        start() {
            console.log("Menu Hamburguer -> class:\n\n");
            console.log(this);
            if (this.mobileMenu) {
                this.addClick();
            } else {
                alert("O menu não está funcionando! :(\nVerifique o código.");
            }
        }
    }

    const menuHamburguer = new MenuHamburguer(
        "nav",
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
    );

    //if(MenuHamburguer)
    menuHamburguer.start();
});
