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

                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>


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
                message: ''
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
                }
            }
        }
    },
    methods: {
        resetForm() {
            this.form = {
                contactName: '',
                email: '',
                message: ''
            }
        },

        submitForm() {
            // route to result page
            console.log(this.v$.form.$model)
            contactFormStore.setFormValues(this.v$.form.$model.contactName, this.v$.form.$model.email, this.v$.form.$model.message)
            this.$router.push('/contact/result')
        }
    }
}

</script>