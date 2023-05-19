<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <h1>Resume</h1>
            </div>

            <div class="col-auto">
                <a href="https://drive.google.com/file/d/1oAp7Vz_vEiW0fsafJmYhieWbsMZRZfPb/view?usp=sharing" target="_blank"
                    class="btn btn-primary">
                    Download PDF
                </a>
            </div>

            <div class="col-12">
                <hr>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-auto">
                <h2>Experiences</h2>
                <hr>
            </div>

        </div>

        <div class="row timeline">
            <template v-for="(experience, index) in experiences" :key="index">
                <div class="col-12 timeline-item">
                    <h3 class="bold-text">
                        {{ experience.company }} - {{ experience.title }} ({{ experience.date }})
                    </h3>

                    <p class="item-description">
                        {{ experience.description }}
                    </p>

                </div>
            </template>
        </div>

        <div class="row mt-4 pt-4">
            <div class="col-auto">
                <h2>Education</h2>
                <hr>
            </div>
        </div>

        <div class="row timeline">
            <div class="col-12 timeline-item">
                <h3 class="bold-text">
                    Sakarya University - (2022 - Present)
                </h3>

                <p class="item-description">
                    Computer Engineering
                </p>
            </div>

            <div class="col-12 timeline-item">
                <h3 class="bold-text">
                    Eskişehir Osmangazi University (2019 - 2022)
                </h3>

                <p class="item-description">
                    Electrical and Electronics Engineering
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "resume-component",
    data() {
        return {
            experiences,
        };
    },
};

const experiences = [
    {
        company: "Tserio Corporation",
        title: "Frontend Developer",
        date: "April 2023 - Present",
        description: "I'm working on cloud based integration platform. I'm responsible for developing frontend applications."
    },
    {
        company: 'Kapsys',
        title: 'Frontend Developer',
        date: 'November 2022 - April 2023',
        description: 'Developing web applications using Angular for the insurance and SEO markets. Reviewing teammates\' codes and contributing to the timely delivery of deliverables.'
    },
    {
        company: 'Linga Ros',
        title: 'Frontend Developer',
        date: 'April 2022 - November 2022',
        description: 'Developed web and hybrid applications using Angular, Ionic, and Capacitor. Worked with international teams on some projects.'
    },
    {
        company: 'Icibot',
        title: 'Frontend Developer',
        date: 'February 2021 - April 2022',
        description: 'Developed over 10 web and hybrid applications using Angular, Ionic, and Capacitor. Optimized website performance and created landing pages.'
    },
    {
        company: 'Freelance',
        title: 'Frontend Developer',
        date: 'January 2020 - February 2021',
        description: 'Provided feature additions, bug fixing, and technology consultancy services for clients in various markets as a freelancer.'
    },
];

</script>
    
<style scoped>
@import './resume.scss';
</style>