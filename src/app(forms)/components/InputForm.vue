<template>
<div>
    <form @submit="submitForm">
        <div>
            <!-- <input type="text" ref="newItem" placeholder="Add an Item!"> -->
            <input type="text" v-model="newItem" placeholder="Add an Item!">
        </div>
        <button>Submit</button>
    </form>
    <div>
        <h4>Items</h4>
        <ul>
            <li v-for="item in items" :key="item" >{{ item }}</li>
        </ul>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'InputForm',
    data() {
        return {
            newItem: '',
            items: []
        }
    },
    methods: {
        submitForm(evt) {
            this.items.push(this.newItem);
            this.newItem = '';
            evt.preventDefault();
        }
    },
}
</script>