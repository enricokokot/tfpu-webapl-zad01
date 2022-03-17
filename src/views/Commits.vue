<template>
  <h1>This is the Home page</h1>
  <ul>
    <Commit
      v-for="commit in commits"
      :key="commit.sha"
      :details="commit"
      @click="setCommit(commit.sha)"
    />
  </ul>
</template>

<script>
import axios from "axios";
import Commit from "@/components/Commit.vue";
import store from "@/store";

export default {
  name: "Commits",
  data: () => ({
    commits: [],
  }),
  created() {
    axios
      .get("https://api.github.com/repos/vuejs/vue/commits")
      .then((response) => {
        this.commits = response.data;
      });
  },
  components: {
    Commit,
  },
  methods: {
    setCommit(sha) {
      store.currentCommit = sha;
    },
  },
};
</script>
