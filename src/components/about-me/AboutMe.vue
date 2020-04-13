<template>
    <div id="about-container">
        <h2 class="title">Sebastian Napora</h2>
        <section class="image-container">
            <img class="my-face" src="../../assets/images/sen.jpg">
        </section>
        <section class="section-text">
            <p class="text">I like very much Brazylijan Jiu-jitsu training, and play on volleybal.</p>
            <p class="text">I lern and write code since 3 years. I started with Java for 6 months, next I try C# from 3 months, and finally I tried React.js for 1,5 years.</p>
            <p class="text">At now I think React is the best for me! But when I go to work in Intive Gmbh I got the project where I was a part of application written in Vue.js.</p>
            <p class="text">That's why I created this application because I wanted to know how Vue works.</p>
            <p class="text">If you have some purpose how to do better my code, I'm waiting for you resposne.</p>
        </section>
        <section class="section-repository">
            <a class="github" href="https://github.com/Scherlock90">My Github repository</a>
        </section>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import '../../assets/styles/app';

#about-container {
    margin: 5%;
    display: flex;
    height: 80%;

    @include sm-min {
        height: 100%;
    }

    @include sm-max {
        display: grid;
    }

    .section-text {
        height: 60%;
        background-color: $main-color;

        @include sm-max {
            height: 100%;
            padding: 5% 2%;
            width: 100%;
        }

        .text {
            text-align: left;
            text-indent: $text-indent;
            word-spacing: $word-spacing;
             @include sm-max {
                font-size: $mobile-font-size;
            }
        }
    }

    .title{
        background-color: $background-color;
        color: $color-background;
    }

    .section-repository{
        background-color: $background-color;

        .github{
            color: $color-background;
            font-size: $mobile-font-size;
        }
    }

    .image-container {
        display: flex;
        justify-content: center;
        width: 40%;

        @include sm-max {
            width: 100%;
            padding: 10% 0;
        }

        .my-face{
            height: 90%;
            width: 90%;
        }
    }
}
</style>
