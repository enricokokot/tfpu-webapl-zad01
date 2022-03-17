<template>
  <h1>This is the Home page</h1>
  <router-link to="details">
    <Commit v-for="commit in commits" :key="commit.node_id" :details="commit" />
  </router-link>
</template>

<script>
import axios from "axios";
import Commit from "@/components/Commit.vue";

export default {
  name: "Commits",
  data: () => ({
    commits: [],
  }),
  created() {
    axios
      .get("https://api.github.com/repos/vuejs/vue/commits")
      .then((response) => {
        // console.log(response.data);
        this.commits = response.data;
      });
  },
  components: {
    Commit,
  },
};
</script>
