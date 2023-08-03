<template>
    <div class="container mt-4 pt-4">
        <div class="row mt-4">
            <div class="col-lg-6 offset-lg-3 offset-0 col-12">
                <h1 class="fs-3 mb-4">
                    Thank you for contacting us!
                </h1>

                <h5 class="fs-5">
                    Your Contact Information
                </h5>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 offset-lg-3 offset-0 col-12">
                <div class="d-flex flex-column">

                    <div>
                        <b>
                            Name:
                        </b> {{ contactFormStore.contactName }}
                    </div>

                    <div>
                        <b>
                            Email:
                        </b> {{ contactFormStore.email }}
                    </div>

                    <div>
                        <b>
                            Message:
                        </b> {{ contactFormStore.message }}
                    </div>

                    <div>
                        <b>
                            Date and Time:
                        </b> {{ contactFormStore.dateTime }}
                    </div>

                    <div>
                        <b>
                            Country:
                        </b> {{ contactFormStore.country }}
                    </div>

                    <div>
                        <b>
                            Gender:
                        </b> {{ contactFormStore.gender }}
                    </div>

                    <div>
                        <b>
                            Subscribe to Newsletter:
                        </b> {{ contactFormStore.subscribeNewsletter ? 'Yes' : 'No' }}
                    </div>
                </div>

                <div class="mt-4">
                    <router-link to="/">
                        <button class="btn btn-primary">
                            Go Home
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { contactFormStore } from './contact.store';

export default {
    name: 'contact-result-component',
    data() {
        return {
            contactFormStore
        }
    },
}
</script>
