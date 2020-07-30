<template id="editProject">
    <div class="index">
        <div class="topContainer">
            <button class="backBnt" @click.prevent="back">Back</button>
        </div>
        <div class="prodjectContainer">
            <div class="card">
                <div class="mt-25">Name</div>
                <input maxlength="255"  type="text" id="project_name" v-model="project.name" class="ml-20">
                <button class="btn ml-20" @click.prevent="update">Ok</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    validate({params}) {
        return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}) {
        let project = {};
        await $axios.$get('projects-manage/' + params.id)
            .then((res)=>{
                project = res.project
            }).catch((error)=>{
                if(+/\d+/.exec(error) == 401)
                {
                    this.$store.dispatch('logout')
                    this.$router.push('/login')
                }
            })
        return {project}
    },
    methods: {
        async update(){
            await this.$axios.$post('projects-manage/update?id=' + this.project.id,this.project);
        },
        back(){
            this.$router.back();
        }
    }

}
</script>

<style scoped>
.index{
    display: inline-block;
    width: 100%;
}
.topContainer{
    padding-left: 50px;
    min-height: 53px;
    background-color: #c1c8d2;
    border-bottom: 1.5px solid #fff;
    display: flex;
    align-items: center;
}
.prodjectContainer{
    margin: 15px auto 50px;
    width: 600px;
    position: relative;
}
.backBnt{
    background: #CECECE;
    color: black;
    height: 34px;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    border: 1px solid #b3b3b3;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
}

.editProject{
    padding: 20px 0;
    width: 600px;
    margin: auto;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
}
.card{
    
    border: 1px solid black;
    background-color: white;
    display: flex;
    border-color: #e4e4e4;
    border-radius: 5px;
    padding: 30px;
}
.ml-20{
    margin-left: 20px;
}
.mt-25{
    margin-top: 25px;
}
</style>
