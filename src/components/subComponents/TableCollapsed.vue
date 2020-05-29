<template>
  <div>
    <div class="sidepanel" :style="{ width: isCollapsed ? '250px' : '0px' }">
      <a href="" class="closebtn">×</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>

    <button class="openbtn" @click="openNav">☰ Toggle Sidepanel</button>
    <h2>Collapsed Sidepanel</h2>
    <p>Click on the hamburger menu/bar icon to open the sidepanel.</p>
  </div>
</template>
<script>
export default {
  name: "TableCollapsed",
  data() {
    return {
      isCollapsed: true
    };
  },
  methods: {
    openNav() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>
<style>
.sidepanel {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 250px;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}
</style>
