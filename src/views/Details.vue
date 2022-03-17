<template>
  <div>
    <h1>This is the Details page</h1>
    <p>{{ commit.commit.author.name }}</p>
    <p>{{ commit.commit.author.email }}</p>
    <p>{{ commit.commit.author.date }}</p>
    <p>{{ commit.commit.message }}</p>
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
        // console.log(response.data);
        this.commit = response.data.find(
          (commit) => commit.sha === store.currentCommit
        );
      });
  },
};
</script>
