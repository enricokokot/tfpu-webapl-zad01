<template>
  <div>
    <h1 class="pt-3 fs-3">Details</h1>
    <div
      class="card position-absolute top-50 start-50 translate-middle text-start"
    >
      <div class="card-header text-center">{{ commit.sha }}</div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Author name</h5>
        <p class="card-text">
          {{ commit.commit.author.name }}
        </p>
        <h5 class="card-title fw-bold">Author email</h5>
        <p class="card-text">
          {{ commit.commit.author.email }}
        </p>
        <h5 class="card-title fw-bold">Commit date</h5>
        <p class="card-text">
          {{ commit.commit.author.date }}
        </p>
        <h5 class="card-title fw-bold">Commit message</h5>
        <p class="card-text">
          {{ commit.commit.message }}
        </p>
        <div class="text-center">
          <router-link to="/"
            ><button class="btn btn-primary">Back</button></router-link
          >
        </div>
      </div>
    </div>
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
