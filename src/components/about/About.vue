<template>
    <div class="container">
        <div class="row py-4 my-4">
            <div class="col-12 col-lg-6">
                <h1>
                    About Me
                </h1>

                <p>
                    As a skilled Front End Developer with a passion for delivering exceptional user experiences, I excel at
                    quickly learning new technologies and staying ahead of industry trends. With a strong focus on
                    continuous
                    improvement and a proven track record of meeting deadlines under pressure, I am committed to delivering
                    top-notch projects that exceed expectations. As a team player with excellent communication and
                    problem-solving skills, I thrive in collaborative environments and am eager to contribute to your
                    organization's success.
                </p>

                <div class="row">
                    <template v-for="(skill, index) in skills" :key="index">
                        <div class="col-2 mb-2 d-flex flex-column">
                            <img :src="skill.logo" :alt="skill.title" class="img-fluid skill-logo">

                            <h5 class="text-muted skill-title">
                                {{ skill.title }}
                            </h5>
                        </div>
                    </template>
                </div>
            </div>

            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <img src="https://media.licdn.com/dms/image/C4E03AQHpfdPg3wPZ3A/profile-displayphoto-shrink_800_800/0/1631968358855?e=1696464000&v=beta&t=WY2kJHudNHiUeUvkt2VNqkUzVF_aSzhMLMnZbQOYX7g"
                    alt="About Me" class="img-fluid">
            </div>


        </div>
    </div>
</template>

<script>

const skills = [
    {
        title: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
        title: 'Vue',
        logo: 'https://vuejs.org/images/logo.png',
    },
    {
        title: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
        title: 'Ionic Framework',
        logo: 'https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2F66cfdbef-e59d-463a-8e24-12cb233e9d97_ionic%2Blogo%2Bblue.png&w=128&q=75',
    },
    {
        title: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png',
    },
    {
        title: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
        title: 'SCSS',
        logo: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
    },
    {
        title: 'JavaScript (JS)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    },
    {
        title: 'TypeScript (TS)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
        title: 'CapacitorJS',
        logo: 'https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png',
    },
    {
        title: 'StorybookJS',
        logo: 'https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png',
    },
    {
        title: 'Cypress',
        logo: 'https://avatars.githubusercontent.com/u/8908513?s=280&v=4',
    }
];

export default {
    name: 'about-me',
    data() {
        return {
            skills: skills
        }
    }
}



</script>

<style lang="scss" scoped>
@import './about.scss';
</style>
