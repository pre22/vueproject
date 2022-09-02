<template>
<div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <button @click="$emit('close', name)">Close Button</button>
</div>
</template>

<script>
export default {
    name: 'Pop-up',
    emits: ['close'],
    data() {
        return {
            name: '',
        }
    }
}
</script>

<style>
    
</style>

<style scoped>
    
</style>