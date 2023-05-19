import { reactive } from 'vue'

export const contactFormStore = reactive({
    contactName: '',
    email: '',
    message: '',
    setFormValues: function (name, email, subject) {
        this.contactName = name;
        this.email = email;
        this.message = subject;

        localStorage.setItem('contactFormStore', JSON.stringify(this));
    }
});

const FORM = localStorage.getItem('contactFormStore');

if (FORM) {
    const form = JSON.parse(FORM);
    contactFormStore.contactName = form.contactName;
    contactFormStore.email = form.email;
    contactFormStore.message = form.message;
}