<template>
  <div >
    <project
      class="project"
      v-for="project in projects" 
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import project from '~/components/project'
export default {
  middleware: ['auth'],
  components:{
    project
  },
  async asyncData({$axios, params}) {
    let projects = {};
    await $axios.$get('projects-manage')
      .then((res)=>{
        projects = res.projects
      })
    return {projects}
  },
}
</script>

<style scoped>


</style>
