<template>
  <div>
    <h1>This is the Details page</h1>
    <p>Author name: {{ commit.commit.author.name }}</p>
    <p>Author email: {{ commit.commit.author.email }}</p>
    <p>Commit date: {{ commit.commit.author.date }}</p>
    <p>Commit message: {{ commit.commit.message }}</p>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  name: "Details",
  data: () => ({
    commit: {},
  }),
  created() {
    axios
      .get("https://api.github.com/repos/vuejs/vue/commits")
      .then((response) => {
        this.commit = response.data.find(
          (commit) => commit.sha === store.currentCommit
        );
      });
  },
};
</script>
