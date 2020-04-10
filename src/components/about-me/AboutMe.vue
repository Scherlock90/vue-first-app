<template>
    <div class="container">
        <div class="image-container">
            <img class="my-face" src="../../assets/sen.jpg">
        </div>
        <section class="section-text">
            <p class="text">I like very much Brazylijan Jiu-jitsu training, and play on volleybal.</p>
            <p class="text">I lern and write code since 3 years. I started with Java for 6 months, next I try C# from 3 months, and finally I tried React.js for 1,5 years.</p>
            <p class="text">At now I think React is the best for me! But when I go to work in Intive Gmbh I got the project where I was a part of application written in Vue.js.</p>
            <p class="text">That's why I created this application because I wanted to know how Vue works.</p>
            <p class="text">If you have some purpose how to do better my code, I'm waiting for you resposne.</p>
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.container{
    padding: 5% 0;
    display: flex;
    height: 90%;

    .section-text {
        height: 60%;

        .text {
            text-align: left;
        }
    }

    .image-container {
        display: flex;
        justify-content: center;
        width: 40%;

        .my-face{
            height: 300px;
            width: 300px;
        }
    }
}
</style>
