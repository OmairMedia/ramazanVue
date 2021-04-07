<template>
  <div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-brand href="#">
        <img src="../assets/img/logo.png" height="70" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-md-5">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
         <b-nav-item-dropdown text="Services" right>
          <b-dropdown-item href="#">Quran</b-dropdown-item>
          <b-dropdown-item href="#">Ramazan Calender</b-dropdown-item>
          <b-dropdown-item href="#">Prayer Times</b-dropdown-item>
          <b-dropdown-item href="#">Hijri Calender</b-dropdown-item>
        </b-nav-item-dropdown>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
   name:'navBar'
}
</script>

<style>

</style>