<template>
<div>
    <pre>
        {{ JSON.stringify(formValues, null, 2) }}
    </pre>
</div>
<form @submit="SubmitForm">
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formValues.name" />
    </div>

    <div>
        <label for="profile">Profile Summary</label>
        <textarea id="profile" v-model="formValues.profileSummary" />
    </div>

    <div>
        <label for="country">Country</label>
        <select id="country" v-model="formValues.country">
            <option value="">Select a country</option>
            <option value="india">India</option>
            <option value="vietnam">Vietnam</option>
            <option value="singapore">Singapore</option>
        </select>
    </div>

    <div>
        <label for="job-location">Job Location</label>
        <select id="job-location" multiple v-model="formValues.jobLocation">
            <option value="">Select a country</option>
            <option value="india">India</option>
            <option value="vietnam">Vietnam</option>
            <option value="singapore">Singapore</option>
        </select>
    </div>

    <div>
        <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
        <label for="remoteWork">Open to remote work</label>
    </div>

    <div>
        <label for="skill-set">Skill set</label>

        <input type="checkbox" id="html" value="html" v-model="formValues.skillset" />
        <label for="html">HTML</label>

        <input type="checkbox" id="css" value="css" v-model="formValues.skillset" />
        <label for="css">CSS</label>

        <input type="checkbox" id="javascript" value="Javascript" v-model="formValues.skillset" />
        <label for="javascript">Javascript</label>

    </div>

    <div>
        <label for="skill-set">Years of Experience</label>

        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience" />
        <label for="0-2">0-2</label>

        <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience" />
        <label for="3-5">3-5</label>

        <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience" />
        <label for="6-10">6-10</label>

    </div>

    <div>
        <button>Submit</button>
    </div>
</form>
    
</template>

<script>

export default {
    name: 'App',
    components: {
       
    },
    data() {
        return {
            formValues: {
                name: '',
                profileSummary: '',
                country: '',
                jobLocation: [],
                remoteWork: "no",
                skillset: [],
                yearsOfExperience: ''
            }
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault(),
            console.log('Form Values', this.formValues)
        }
    }
}
</script>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}


</style>