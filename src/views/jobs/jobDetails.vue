<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
// import { ref } from 'vue'

export default {
    name: 'JobDetails',
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }

}
</script>

<style>

</style>