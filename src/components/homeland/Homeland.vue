<template>
    <div class="container-fluid p-0 m-0">
        <div class="carousel slide city-slider" id="city-slider">
            <div class="carousel-inner">
                <template v-for="(photo, index) in sliderPhotos" :key="index">
                    <div class="carousel-item" :class="{
                        active: index === 0,
                    }">
                        <img :src="photo.src" :alt="photo.alt" @click="scrollTo(photo.sectionId)">

                        <div class="carousel-caption">
                            <h3 class="m-0">{{ photo.alt }}</h3>
                        </div>
                    </div>
                </template>
            </div>

            <button class="control-btn carousel-control-prev" type="button" data-bs-target="#city-slider"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon control-btn-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="control-btn carousel-control-next" type="button" data-bs-target="#city-slider"
                data-bs-slide="next">
                <span class="carousel-control-next-icon control-btn-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="mt-4">Konya</h1>

                <h4 class="text-muted fs-5">
                    <b>Population:</b> 2,232,374 <br>
                    <b>Height:</b> 1,024 m
                </h4>

                <hr>
            </div>

            <div class="col-12">
                <article>
                    <section id="konya">
                        <h2 class="fs-4">About Konya</h2>
                        <p>
                            Konya is a historic city located in the central part of Turkey. It is the capital of the Konya
                            Province and is known for its rich cultural heritage, spirituality, and connection to Sufism.
                        </p>
                    </section>

                    <section>
                        <h2 class="fs-4">History and Cultural Significance</h2>
                        <p>
                            Konya is one of the oldest inhabited cities in the world, with evidence of human settlement
                            dating back thousands of years. Throughout history, it has been influenced by various
                            civilizations, including the Hittites, Phrygians, Lydians, Persians, Greeks, Romans, and
                            Byzantines. However, it gained particular significance during the Seljuk period when it became
                            the capital of the Anatolian Seljuk Sultanate in the 12th century.
                        </p>
                    </section>

                    <section id="mevlana">
                        <h2 class="fs-4">Mevlana Museum and Sufism</h2>
                        <p>
                            One of the city's most prominent features is the Mevlana Museum, which is dedicated to the
                            famous Sufi poet and philosopher, Mevlana Rumi. Rumi's teachings of love, tolerance, and
                            spiritual enlightenment have made Konya an important center of Sufism, attracting pilgrims and
                            spiritual seekers from around the world.
                        </p>
                    </section>

                    <section id="selimiye">
                        <h2 class="fs-4">Selimiye Camii (Mosque)</h2>
                        <p>
                            Selimiye Camii, also known as Selimiye Mosque, is an iconic religious site in Konya. This
                            historical mosque showcases exquisite Seljuk architecture and is a significant place of worship.
                            Visitors can admire the intricate details, experience the spiritual ambiance, and learn about
                            the mosque's cultural importance.
                        </p>
                    </section>

                    <section>
                        <h2 class="fs-4">Architectural Landmarks</h2>
                        <p>
                            Konya's architectural landmarks showcase its historical importance. The Alaeddin Mosque, an
                            impressive Seljuk-era structure, stands on a hill overlooking the city and offers panoramic
                            views. The Karatay Madrasah, Ince Minaret Medrese, and the Sircali Medrese are other notable
                            examples of Seljuk architecture.
                        </p>
                    </section>

                    <section>
                        <h2 class="fs-4">Traditional Arts and Crafts</h2>
                        <p>
                            The city's traditional arts and crafts, such as carpet weaving, ceramics, and metalwork, have
                            been passed down through generations. Visitors can explore the local bazaars and workshops to
                            witness the skilled artisans at work and purchase authentic handmade products.
                        </p>
                    </section>

                    <section>
                        <h2 class="fs-4">Whirling Dervishes Festival</h2>
                        <p>
                            Konya is also famous for its annual Whirling Dervishes Festival, known as the "Mevlana Festival"
                            or "Şeb-i Arus." This event commemorates the death anniversary of Mevlana Rumi and attracts
                            large crowds who gather to witness the mystical whirling dance performances.
                        </p>
                    </section>

                    <section>
                        <h2 class="fs-4">Natural Beauty and Outdoor Activities</h2>
                        <p>
                            In terms of natural beauty, Konya offers picturesque landscapes and outdoor activities. The
                            nearby Taurus Mountains, Sultan Marshes, and Eber Lake provide opportunities for hiking,
                            birdwatching, and nature exploration.
                        </p>
                    </section>



                    <section id="kulturpark">
                        <h2 class="fs-4">Kültürpark</h2>
                        <p>
                            Kültürpark is a popular public park in Konya, offering recreational spaces, green areas, and
                            amenities for visitors to relax and enjoy. It is a great place for families, couples, and
                            individuals to spend leisure time, have picnics, and engage in outdoor activities.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "homeland-component",
    data() {
        return {
            sliderPhotos: sliderPhotos,
        }
    },
    methods: {
        scrollTo(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }
};

const sliderPhotos = [{
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Konya_21_%28cropped%29.JPG/1920px-Konya_21_%28cropped%29.JPG',
    alt: 'Konya',
    sectionId: 'konya',
},
{
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Maulana_Jelaledin_Muhammad_Rumi_in_konya.jpg/1920px-Maulana_Jelaledin_Muhammad_Rumi_in_konya.jpg',
    alt: 'Mevlana',
    sectionId: 'mevlana',
},
{
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Selimiye_Mosque_-_Selimiye_Camii%2C_Konya.jpg/1920px-Selimiye_Mosque_-_Selimiye_Camii%2C_Konya.jpg',
    alt: 'Selimiye Mosque',
    sectionId: 'selimiye',
},
{
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/K%C3%BClt%C3%BCrparkKonya.jpg/1920px-K%C3%BClt%C3%BCrparkKonya.jpg',
    alt: 'Kulturpark',
    sectionId: 'kulturpark',
}
]
</script>

<style lang="scss">
@import './homeland.scss';
</style>