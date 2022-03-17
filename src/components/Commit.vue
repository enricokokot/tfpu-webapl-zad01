<template>
  <li class="list-group-item list-group-item-action">
    <router-link to="/details">{{ details.sha }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["details"],
  name: "Commit",
};
</script>
