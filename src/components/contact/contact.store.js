import { reactive } from 'vue'

export const contactFormStore = reactive({
    contactName: '',
    email: '',
    message: '',
    dateTime: '',
    country: '',
    gender: '',
    subscribeNewsletter: false,

    setFormValues: function (name, email, message, dateTime, country, gender, subscribeNewsletter) {
        this.contactName = name;
        this.email = email;
        this.message = message;
        this.dateTime = dateTime;
        this.country = country;
        this.gender = gender;
        this.subscribeNewsletter = subscribeNewsletter;

        localStorage.setItem('contactFormStore', JSON.stringify(this));
    }
});

const FORM = localStorage.getItem('contactFormStore');

if (FORM) {
    const form = JSON.parse(FORM);
    contactFormStore.contactName = form.contactName;
    contactFormStore.email = form.email;
    contactFormStore.message = form.message;
    contactFormStore.dateTime = form.dateTime;
    contactFormStore.country = form.country;
    contactFormStore.gender = form.gender;
    contactFormStore.subscribeNewsletter = form.subscribeNewsletter;
}
