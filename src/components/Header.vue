<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">Mustafa Daglioglu</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/resume">Resume</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/homeland">Homeland</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/mevlana">Mevlana</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/interests">Interests</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login/Logout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: "header-component",
};

</script>

<style>
.router-link-exact-active:not(.navbar-brand) {
    color: #fff;
    font-weight: bold;
}
</style>