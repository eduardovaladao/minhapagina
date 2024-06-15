console.log("Hello, World, again!");

class EmailForm {
    constructor(settings) {
        this.settings = settings;

        this.form = document.querySelector(settings.form);

        if (this.form) {
            this.url = this.form.getAttribute("action");
        }

        this.formButton = this.form.querySelector(settings.button);

        this.sendEmail = this.sendEmail.bind(this);
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach(field => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    preventedButton(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerHTML = "Enviando...";
    }

    reenableButton(event) {
        event.target.disabled = false;
        event.target.innerHTML = "Enviar";
    }

    async sendEmail(event) {
        try {
            this.preventedButton(event);
            var res = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application.json"
                },
                body: JSON.stringify(this.getFormObject())
            });
            this.reenableButton(event);
            alert("Email recebido!");

            console.log(res);
                   
        } catch(error) {
            alert("Ops! Algo deu errado! Tente novamente mais tarde.");
            throw new Error(error);
        }
    }

    start() {
        if (this.form) this.formButton.addEventListener("click", this.sendEmail);
    }
}

const emailForm = new EmailForm({
    form: "[data-form]",
    button: "[data-button]"
});

emailForm.start();