<template>
    <div class="home">
        <h1>Welcome to main page</h1>
        <p>Информация, которую стоит указать обо мне, я считаю - это любовь к пельменям.</p>
        <router-link to="/groups">Страница с группами</router-link>
    </div>
</template>
  
<script>
    export default {
        name: 'fgh-home'
    }
</script>

<style scoped>
    h1{
        text-align: center;
        font-size: 50px;
        margin-top: 250px;
    }

    p{
        text-align: center;
        font-size: 25px;
    }

    a{
        text-decoration: none;
        text-align: center;
        font-size: 25px;
    }
</style>