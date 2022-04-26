<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <input v-model="text" @blur="textToRwx" type="text" class="uk-input">
      {{text}}
    </div>
    <div>
      <input v-model="num" @blur="numToRwx" type="text">
      {{num}}
    </div>
    <div>
      <input v-model="ownerRead" type="checkbox">
      ownerRead: {{ownerRead}}
      <input v-model="ownerWrite" type="checkbox">
      ownerWrite: {{ownerWrite}}
      <input v-model="ownerExcute" type="checkbox">
      ownerExcute: {{ownerExcute}}
    </div>
    <div>
      <input v-model="groupRead" type="checkbox">
      groupRead: {{groupRead}}
      <input v-model="groupWrite" type="checkbox">
      groupWrite: {{groupWrite}}
      <input v-model="groupExcute" type="checkbox">
      groupExcute: {{groupExcute}}
    </div>
    <div>
      <input v-model="otherRead" type="checkbox">
      otherRead: {{otherRead}}
      <input v-model="otherWrite" type="checkbox">
      otherWrite: {{otherWrite}}
      <input v-model="otherExcute" type="checkbox">
      otherExcute: {{otherExcute}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      text: '-rwxrwxrwx',
      num: '777',
      ownerRead: true,
      ownerWrite: true,
      ownerExcute: true,
      groupRead: true,
      groupWrite: true,
      groupExcute: true,
      otherRead: true,
      otherWrite: true,
      otherExcute: true,
    }
  },
  watch: {
    ownerRead() {
      this.onToggle()
    },
    ownerWrite() {
      this.onToggle()
    },
    ownerExcute() {
      this.onToggle()
    },
    groupRead() {
      this.onToggle()
    },
    groupWrite() {
      this.onToggle()
    },
    groupExcute() {
      this.onToggle()
    },
    otherRead() {
      this.onToggle()
    },
    otherWrite() {
      this.onToggle()
    },
    otherExcute() {
      this.onToggle()
    },
  },
  methods: {
    textToRwx() {
      // owner
      let ownerRwx = this.textToRwxCore(this.text.slice(1,4))
      this.ownerRead = ownerRwx[0]
      this.ownerWrite = ownerRwx[1]
      this.ownerExcute = ownerRwx[2]
      // group
      let groupRwx = this.textToRwxCore(this.text.slice(4,7))
      this.groupRead = groupRwx[0]
      this.groupWrite = groupRwx[1]
      this.groupExcute = groupRwx[2]
      // other
      let otherRwx = this.textToRwxCore(this.text.slice(7,10))
      this.otherRead = otherRwx[0]
      this.otherWrite = otherRwx[1]
      this.otherExcute = otherRwx[2]
    },
    textToRwxCore(text) {
      let readChar = text.slice(0,1)
      let writeChar = text.slice(1,2)
      let excuteChar = text.slice(2,3)
      let readFlag, writeFlag, excuteFlag
      // read
      if (readChar === 'r') {
        readFlag = true
      } else if (readChar === '-') {
        readFlag = false
      } else {
        readFlag = null
      }
      // write
      if (writeChar === 'w') {
        writeFlag = true
      } else if (writeChar === '-') {
        writeFlag = false
      } else {
        writeFlag = null
      }
      // excute
      if (excuteChar === 'x') {
        excuteFlag = true
      } else if (excuteChar === '-') {
        excuteFlag = false
      } else {
        excuteFlag = null
      }
      return [readFlag, writeFlag, excuteFlag]
    },
    numToRwx() {
      console.log(this.num)
      console.log(this.num.toString().slice(0, 1))
      console.log(Number(this.num.toString().slice(0, 1)))
      // owner
      let ownerRwx = this.numToRwxCore(Number(this.num.toString().slice(0, 1)))
      this.ownerRead = ownerRwx[0]
      this.ownerWrite = ownerRwx[1]
      this.ownerExcute = ownerRwx[2]
      // group
      let groupRwx = this.numToRwxCore(Number(this.num.toString().slice(1, 2)))
      this.groupRead = groupRwx[0]
      this.groupWrite = groupRwx[1]
      this.groupExcute = groupRwx[2]
      // other
      let otherRwx = this.numToRwxCore(Number(this.num.toString().slice(2, 3)))
      this.otherRead = otherRwx[0]
      this.otherWrite = otherRwx[1]
      this.otherExcute = otherRwx[2]
    },
    numToRwxCore(num) {
      let readFlag, writeFlag, excuteFlag
      if (num === 0){
        readFlag = false
        writeFlag = false
        excuteFlag = false
      } else if (num === 1) {
        readFlag = false
        writeFlag = false
        excuteFlag = true
      } else if (num === 2) {
        readFlag = false
        writeFlag = true
        excuteFlag = false
      } else if (num === 3) {
        readFlag = false
        writeFlag = true
        excuteFlag = true
      } else if (num === 4) {
        readFlag = true
        writeFlag = false
        excuteFlag = false
      } else if (num === 5) {
        readFlag = true
        writeFlag = false
        excuteFlag = true
      } else if (num === 6) {
        readFlag = true
        writeFlag = true
        excuteFlag = false
      } else if (num === 7) {
        readFlag = true
        writeFlag = true
        excuteFlag = true
      } else {
        readFlag = null
        writeFlag = null
        excuteFlag = null
      }
      return [readFlag, writeFlag, excuteFlag]
    },
    onToggle() {
      this.rwxToText()
      this.rwxToNum()
    },
    rwxToNum() {
      this.num = this.rwxToNumCore(this.ownerRead, this.ownerWrite, this.ownerExcute)
               + this.rwxToNumCore(this.groupRead, this.groupWrite, this.groupExcute)
               + this.rwxToNumCore(this.otherRead, this.otherWrite, this.otherExcute)
    },
    rwxToNumCore(readFlag, writeFlag, excuteFlag) {
      if (readFlag) {
        if (writeFlag) {
          if (excuteFlag) {
            return '7'
          } else {
            return '6'
          }
        } else {
          if (excuteFlag) {
            return '5'
          } else {
            return '4'
          }
        }
      } else {
        if (writeFlag) {
          if (excuteFlag) {
            return '3'
          } else {
            return '2'
          }
        } else {
          if (excuteFlag) {
            return '1'
          } else {
            return '0'
          }
        }
      }
    },
    rwxToText() {
      this.text = this.text.slice(0, 1)
        + (this.ownerRead ? 'r' : '-')
        + (this.ownerWrite ? 'w' : '-')
        + (this.ownerExcute ? 'x' : '-')
        + (this.groupRead ? 'r' : '-')
        + (this.groupWrite ? 'w' : '-')
        + (this.groupExcute ? 'x' : '-')
        + (this.otherRead ? 'r' : '-')
        + (this.otherWrite ? 'w' : '-')
        + (this.otherExcute ? 'x' : '-')
    },
  }
}
</script>
