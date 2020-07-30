<template id="project">
  <div class="container"> 
    <div class="card" @click.prevent="editProject">
      <img :src="project.logo_url" class="avatar" />
      <div class="name">{{project.name}}</div>
      <div v-if="project.is_active" class="active">Active</div>
      <div v-else class="notActive">Not active</div>
      <div class="time">
        <div>time this week</div>
        <div>this month</div>
        <div>total</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        project: {}
    },
  methods: {
    editProject() {
      this.$router.push('/edit/' + this.project.id)
      .catch((error)=>{
        if(+/\d+/.exec(error) == 401)
        {
          this.$store.dispatch('logout')
          this.$router.push('/login')
        }
      })
    }
  }
    
}
</script>

<style scoped>
#project{
  display: inline-block;
  width: 100%;
}
.container{
  margin: 15px auto 50px;
  width: 800px;
  position: relative;
}
.card{
  margin-top: 20px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  border-color: #e4e4e4;
  border-radius: 5px;
  padding: 30px;
  width: 800px;
}
.avatar {
  vertical-align: middle;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-right: 25px;
}
.name{
  font-weight: 700;
  width: 200px;
  padding-top: 20px;
  margin-right: 25px;
}
.active{
  color: green;
  padding-top: 20px;
  width: 150px;
  font-weight: 700;
}
.notActive{
  color: red;
  padding-top: 20px;
  width: 150px;
  font-weight: 700;
}


</style>
