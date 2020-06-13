<template>
  <div id="app">
    <ul>
      <item>
        아이템 1
      </item>
      <item>
        아이템 2 <button>click me</button>
      </item>
      <item>
        <div>
          아이템 3
        </div>
        <img src="./assets/logo.png" alt="vue.js logo" style="width: 50px; height: 50px;">
      </item>
      <item>
        <div style="color: blue; font-size: 20px;">아이템 4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './components/Item.vue'

export default {
  name: 'App',
  components: {
    Item
  }
}
</script>