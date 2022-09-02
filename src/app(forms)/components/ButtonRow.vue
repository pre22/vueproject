<template>
    <div>
        <button @click="onHoodieClick" class="ui-button">Hoodie</button>
        <button @click="onTeeClick" class="ui-button">Tee</button>
        <button @click="onFittedCapClick" class="ui-button">Fitted Cap</button>
        <button @click="onJacketClick" class="ui-button">Jacket</button>
    </div>
    <h2>{{ response }}</h2>
</template>

<script>
export default {
    name: 'ButtonRow',
    data() {
        return {
            response: ''
        }
    },
    methods: {
        onTeeClick() {
            this.response = 'The user clicked button-tee';
        },
        onHoodieClick() {
            this.response = 'The user clicked button-hoodie';
        },
        onFittedCapClick() {
            this.response = 'The user clicked button-fitted-cap';
        },
        onJacketClick() {
            this.response = 'The user clicked button-jacket';
        }
    }
}
</script>

<style scoped>
.ui-button {
    display: flex;
    padding: 5px;
    color: olivedrab;
}
</style>