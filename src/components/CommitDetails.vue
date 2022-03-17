<template>
  <div>
    {{ details.sha }}
  </div>
</template>

<script>
export default {
  props: ["details"],
  name: "CommitDetails",
};
</script>
