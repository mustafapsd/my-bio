<template>
    <div class="container mt-4 pt-4">
        <div class="row mt-4 pt-4 mb-2">
            <div class="col-lg-6 offset-lg-3 offset-0 col-12">
                <h1 class="fs-3">
                    Login
                </h1>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 offset-lg-3 offset-0 col-12">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input v-model="username" type="email" class="form-control" id="email">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                    </div>

                    <button type="submit" class="btn btn-primary d-block ms-auto">Submit</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'login-component',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            fetch('http://mustafa.42web.io/login.php', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem('token', data.token);
                        alert(`You have successfully logged in.`);
                        this.$router.push('/');
                    } else {
                        alert(`You have entered wrong username or password.`);
                    }
                }).catch(() => {
                    alert(`An error occured while logging in.`);
                })

        }
    }
}


</script>