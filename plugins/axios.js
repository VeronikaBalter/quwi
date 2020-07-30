export default function ({ $axios, $store, $router}) {
  
    $axios.onError(error => {
      if(+/\d+/.exec(error) == 401)
      {
        $store.dispatch('logout')
        $router.push('/login')
      }
      else if(+/\d+/.exec(error) == 404)
      {
        console.log(error)
      }
      else if(+/\d+/.exec(error) == 417)
      {
        console.log(error)
      }
    })
  }