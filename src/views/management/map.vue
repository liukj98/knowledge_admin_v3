<template>
  <div>可视化管理</div>
  <div class="count">
    <!-- 组件 -->
    <numberScroll :value="3000" :time="30" />
  </div>
</template>

<script setup>
import NumberScroll from "@/views/show/components/CountTo.vue"
</script>
