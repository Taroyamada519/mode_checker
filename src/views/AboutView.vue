<template>
  <div class="about">
    <div>
      <input v-model="text" type="text" class="uk-input">
      {{text}}
    </div>
    <div>
      <input v-model="flag" type="checkbox">
      flag: {{flag}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  data() {
    return {
      text: 'false',
      flag: false
    }
  },
  watch: {
    text() {
      this.flag = (this.text === 'true')
    },
    flag() {
      if (this.flag) {
        this.text = 'true'
      } else {
        this.text = 'false'
      }
    }
  },
}
</script>
