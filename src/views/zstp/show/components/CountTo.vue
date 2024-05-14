<template>
  <span class="number-scroll-grow">
    <span ref="numberScroll" :data-time="time" class="number-scroll" :data-value="value"> 0 </span>
  </span>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "numberScroll",
  props: {
    time: {
      type: Number,
      default: 2
    },
    value: {
      type: Number,
      default: 0
    },
    thousandSign: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      oldValue: 0
    }
  },
  watch: {
    value: function () {
      this.numberScroll(this.$refs.numberScroll)
    }
  },
  methods: {
    numberScroll(ele) {
      const value = this.value - this.oldValue
      const step = (value * 10) / (this.time * 100)
      let current = 0
      let start = this.oldValue
      let t = setInterval(() => {
        start += step
        if (start > this.value) {
          clearInterval(t)
          start = this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = parseInt(start)
        this.oldValue = current
        if (this.thousandSign) {
          ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,")
        } else {
          ele.innerHTML = current.toString()
        }
      }, 10)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.numberScroll(this.$refs.numberScroll)
    })
  }
})
</script>

<style lang="scss" scoped>
.number-scroll-grow {
  transform: translateZ(0);
}
</style>
