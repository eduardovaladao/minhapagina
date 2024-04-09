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

        toggleActive() {
            this.nav.toggleClass(this.active);
            this.navList.toggleClass(this.active);
            this.mobileMenu.toggleClass(this.active);
            console.log("Alright!");
        }

        addMenuClick() {
            console.log("Ok methods");

            $(this.mobileMenu).click(() => {
                console.log("Ok click");
                this.toggleActive();
            });
        }

        addLinkClick() {
            console.log("added \"click\" on nav links!");
            this.navLinks.click(() => {
                // Cada link agora tem uma função "onclick"
                if (window.document.body.clientWidth <= 480) {
                    console.log("Body width condition executed. Navbar is animated!");
                    // Comentário ativado quando a condição acaba de ser executada
                    this.toggleActive();
                    
                } else {
                    console.log("Navbar is still static!");
                    // Aqui, o cliente não possui o "menu hamburguer", logo, os "onclicks" dos links da navbar permanecem inativos
                }
            });
        }

        start() {
            console.log("Menu Hamburguer -> class:\n\n", this);

            if (this.mobileMenu) {
                this.addMenuClick();
                this.addLinkClick();
            } else {
                alert("O menu não está funcionando! :(\nVerifique o código.");
            }
        }
    }

    const menuHamburguer = new MenuHamburguer(
        "nav",
        ".mobile-menu",
        ".nav-list",
        ".nav-list li a"
    );

    //if(MenuHamburguer)
    menuHamburguer.start();
});