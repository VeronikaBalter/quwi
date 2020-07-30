<template>
    <div class="container">
        <form @submit.prevent="login()">
            <h2>LOGIN</h2>
            <div v-if="error!=null" class="error">{{error}}</div>
            <input v-model="user.email" type="email" placeholder="Email" required/><br/>
            <input v-model="user.password" type="password" placeholder="Password" required/><br/>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    layout: 'empty',
    data() {
        return {
            user:{
                email: null,
                 password: null,
            },
            error:null
        };
    },
    methods: {
        login() {
            this.$store.dispatch('login', this.user)
                .catch((error)=>{
                    this.error = "Email or password is incorrect";
                });
        }
  }
}
</script>
<style>
.container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
}
  
input {
    width: 300px;
    padding: 9px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 2px;
    margin-top: 20px ;
}
.btn {
    width: 100px;
    margin-top: 20px;
}
</style>