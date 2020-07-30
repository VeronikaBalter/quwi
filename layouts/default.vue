
<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components: {
    navbar
  }
}
</script>


<style>

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


.btn {
  height: 34px;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    text-shadow: 1px 1px 1px rgba(0,0,0,.5);
    background: #395378;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
}
input[type=text] {
    width: 100%;
    padding: 9px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 2px;
}
.error{
  color: red;
}
</style>
