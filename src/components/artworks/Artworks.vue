<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <h1>Artworks</h1>
                <hr>
            </div>
        </div>

        <div class="row">
            <div class="col-12 mb-4">
                <input type="text" class="form-control" placeholder="Search" v-model="search">
            </div>

            <template v-if="loading">
                <div class="col-12">
                    <div class="alert alert-info">
                        <div class="row">
                            <div class="col-auto">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            <div class="col">
                                <p class="mb-0">
                                    Loading artworks...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="!search">
                <div class="col-12">
                    <div class="alert alert-info">
                        <p class="mb-0">
                            Search for artworks by typing in the search box above.
                        </p>
                    </div>
                </div>
            </template>

            <template v-else>
                <template v-for="artwork in artworks" :key="artwork.imageId">
                    <div class="col-12 col-lg-6 col-xl-4 mb-4">
                        <div class="card h-100">
                            <div class="card-img-container position-relative h-100">
                                <img :src="artwork.imageSrc" :alt="artwork.description" class="card-img-top h-100">
                                <template v-if="!artwork.fullImg">
                                    <template v-if="!artwork.loading">
                                        <div class="card-img-overlay" @click="showFullImage(artwork)">
                                            Show full image
                                        </div>
                                    </template>

                                    <template v-else>
                                        <div class="card-img-overlay">
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </div>

                            <div class="card-body">
                                <h4 class="fs-5 bold-text">
                                    {{ artwork.title }}
                                </h4>

                                <p class="card-text">
                                    {{ artwork.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </template>

        </div>
    </div>
</template>

<script>
import { Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";

export default {
    name: "artworks-component",
    data() {
        return {
            search: "",
            search$: new Subject(),
            unMount$: new Subject(),
            artworks: [],
            loading: false,
        };
    },
    unmounted() {
        this.unMount$.next();
        this.unMount$.complete();
    },
    mounted() {
        this.search$.pipe(
            takeUntil(this.unMount$),
            debounceTime(500),
        ).subscribe(() => {
            this.searchArtworks();
        });
    },
    methods: {
        searchArtworks() {
            this.loading = true;

            const BODY = {
                q: this.search,
                query: {
                    term: {
                        is_public_domain: true,
                    }
                }
            }

            fetch('https://api.artic.edu/api/v1/artworks/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(BODY),
            }
            ).then(response => {
                this.loading = false;
                return response.json();
            }).then(({ data }) => {
                this.artworks = data.map(x => {
                    return {
                        title: x.title,
                        description: x.thumbnail.alt_text,
                        imageId: x.id,
                        imageSrc: x.thumbnail.lqip,
                    }
                })
            }).catch(err => {
                console.log(err);
            });
        },
        showFullImage(artwork) {
            artwork.loading = true;

            fetch(`https://api.artic.edu/api/v1/artworks/${artwork.imageId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            ).then(response => {
                return response.json();
            }).then(({ data }) => {
                artwork.imageSrc = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
                artwork.fullImg = true;
                artwork.loading = false;
            }).catch(err => {
                console.log(err);
            });
        }
    },
    watch: {
        search() {
            this.search$.next(this.search);
        }
    }
};

</script>

<style scoped>
@import './artworks.scss';
</style>