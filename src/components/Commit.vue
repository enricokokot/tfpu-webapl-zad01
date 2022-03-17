<template>
  <li>
    <router-link to="/details">
      {{ details.sha }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["details"],
  name: "Commit",
};
</script>
