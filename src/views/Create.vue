<template>
    <div style="padding-top: 60px;">
        <h1>论文</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="periodical">Periodical:</label>
                <input type="text" v-model="form.periodical" id="periodical" required />
            </div>
            <div>
                <label for="title">Title:</label>
                <input type="text" v-model="form.title" id="title" required />
            </div>
            <div>
                <label for="paper_url">Paper URL:</label>
                <input type="url" v-model="form.paper_url" id="paper_url" required />
            </div>
            <div>
                <label for="abstract">Abstract:</label>
                <textarea v-model="form.abstract" id="abstract" required></textarea>
            </div>
            <div>
                <label for="image_url">Image URL:</label>
                <input type="text" v-model="form.image_url" id="image_url" value="title.png"  />
            </div>
            <div>
                <label for="date">Day:</label>
                <input type="text" v-model="form.day" id="day" required />
            </div>
            <div>
                <label for="date">Date:</label>
                <input type="date" v-model="form.date" id="date" required />
            </div>
            <!-- <button type="submit">Submit</button>   -->
        </form>
        <pre>{{ form }}</pre>



        <h1>个人信息</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="title">Name:</label>
                <input type="text" v-model="formAnimal.name" id="name" required />
            </div>
            <div>
                <label for="Email">Email</label>
                <input type="url" v-model="formAnimal.email" id="email" required />
            </div>

            <div>
                <label for="image_url">Image URL:</label>
                <input type="text" v-model="formAnimal.img" id="image_url"  />
            </div>
            <div>
                <label for="grade">年级:</label>
                <input type="text" v-model="formAnimal.grade" id="grade" required />
            </div>
            <div>
                <label for="type">类型:</label>
                <select v-model="formAnimal.type" id="type" required>
                    <option value="0">0</option>
                    <option value="1">博士</option>
                    <option value="2">硕士</option>
                    <option value="3">本科！</option>
                </select>
                
            </div>
        </form>
        <pre>{{ formAnimal }}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                periodical: '',
                title: '',
                paper_url: '',
                abstract: '',
                image_url: 'title.png',
                day: '',
                date: ''
            },
            formAnimal:{
                name: '',
                email: '',
                img:'',
                grade: '',
                type: '',
            }
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.form);
            // You can add your form submission logic here
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
}

div {
    margin-bottom: 10px;
}

label {
    margin-bottom: 5px;
}

input, textarea, select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>