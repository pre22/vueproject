<template>
    <h2 v-for="name in fullNames" :key="name.first">
        {{ name.first }} {{ name.last }}
    </h2>

    <div v-for="actor in actors" :key="actor.name">
        <h2>{{ actor.name }} </h2>
    </div>
    <div v-for="actor in actors" :key="actor.name" >
        <h2>{{ actor.name }}</h2>
        <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
    </div>
    <hr/>

    <div v-for="value in myInfo" :key="value">
        {{ value }}
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            fullNames: [
                { first: 'Bruce', last: 'wayne' },
                { first: 'Clark', last: 'Kent' },
                { first: 'Princess', last: 'Diana' },
            ],
            actors: [
                {
                    name: 'Christain Bale',
                    movies: ['Batman', 'The Prestige'],
                },
                {
                    name: 'Di Caprio',
                    movies: ['Titanic'],
                }
            ],
            myInfo: {
                name: 'Vishwas',
                channel: 'Codevolution',
                course: 'Vue 3'
            }
        }
    },
}
</script>