<template>
  <h1 class="pt-3 mb-2 fs-3">Home</h1>
  <ul class="list-group list-group-flush">
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
