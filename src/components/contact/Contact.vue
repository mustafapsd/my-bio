<template>
    <div class="container mt-4 pt-4">
        <div class="row mt-4">
            <div class="col-12 col-lg-6 offset-lg-3 offset-0">
                <h1 class="fs-3">
                    Contact
                </h1>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12 col-lg-6 offset-lg-3 offset-0">
                <form @submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="contactName" class="form-label">Name</label>
                        <input v-model="v$.form.contactName.$model" type="text" class="form-control" id="contactName">
                        <div class="form-text text-danger" v-if="v$.form.contactName.$errors">
                            {{ v$.form.contactName.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input v-model="v$.form.email.$model" type="email" class="form-control" id="email">
                        <div class="form-text text-danger" v-if="v$.form.email.$errors">
                            {{ v$.form.email.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea v-model="v$.form.message.$model" class="form-control" id="message" rows="3"></textarea>
                        <div class="form-text text-danger" v-if="v$.form.message.$errors">
                            {{ v$.form.message.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="dateTime" class="form-label">Date and Time</label>
                        <input v-model="v$.form.dateTime.$model" type="datetime-local" class="form-control" id="dateTime">
                        <div class="form-text text-danger" v-if="v$.form.dateTime.$errors">
                            {{ v$.form.dateTime.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="country" class="form-label">Country</label>
                        <select v-model="v$.form.country.$model" class="form-select" id="country">
                            <option value="" disabled>Select a country</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                        <div class="form-text text-danger" v-if="v$.form.country.$errors">
                            {{ v$.form.country.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Gender</label>
                        <div class="form-check">
                            <input v-model="v$.form.gender.$model" type="radio" class="form-check-input" id="male"
                                value="male">
                            <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div class="form-check">
                            <input v-model="v$.form.gender.$model" type="radio" class="form-check-input" id="female"
                                value="female">
                            <label class="form-check-label" for="female">Female</label>
                        </div>
                        <div class="form-text text-danger" v-if="v$.form.gender.$errors">
                            {{ v$.form.gender.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="form-check">
                            <input v-model="v$.form.subscribeNewsletter.$model" type="checkbox" class="form-check-input"
                                id="subscribeNewsletter">
                            <label class="form-check-label" for="subscribeNewsletter">Subscribe to Newsletter</label>
                        </div>
                        <div class="form-text text-danger" v-if="v$.form.subscribeNewsletter.$errors">
                            {{ v$.form.subscribeNewsletter.$errors.map(error => error.$message).join(', ') }}
                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>


                        <button type="button" @click="validateAndSubmitForm" class="btn btn-primary ms-2">Submit (Vanilla
                            JS)</button>

                        <button :disabled="v$.form.$invalid" type="submit" class="btn btn-primary ms-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { contactFormStore } from './contact.store'

export default {
    name: 'contact-component',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                contactName: '',
                email: '',
                message: '',
                dateTime: '', // Add datetime input
                country: '',  // Add select input
                gender: '',   // Add radio buttons
                subscribeNewsletter: false, // Add checkbox
            }
        }
    },
    validations() {
        return {
            form: {
                contactName: {
                    required
                },
                email: {
                    required,
                    email
                },
                message: {
                    required
                },
                dateTime: {
                    required
                },
                country: {
                    required
                },
                gender: {
                    required
                },
                subscribeNewsletter: {
                    required
                },
            }
        }
    },
    methods: {
        resetForm() {
            this.form = {
                contactName: '',
                email: '',
                message: '',
                dateTime: '',
                country: '',
                gender: '',
                subscribeNewsletter: false,
            };
        },
        submitForm() {
            contactFormStore.setFormValues(
                this.v$.form.$model.contactName,
                this.v$.form.$model.email,
                this.v$.form.$model.message,
                this.v$.form.$model.dateTime,
                this.v$.form.$model.country,
                this.v$.form.$model.gender,
                this.v$.form.$model.subscribeNewsletter
            );
            this.$router.push('/contact/result');
        },
        validateAndSubmitForm() {
            if (this.validateForm()) {
                this.submitForm();
            } else {
                alert('Please fix the errors in the form');
            }
        },
        validateForm() {
            const form = this.v$.form

            if (!form.$invalid) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>
