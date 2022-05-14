<template>
  <PageWrapper title="" content="" contentFullHeight fixedHeight>
    <FlowChart :data="{}" />
  </PageWrapper>
</template>

<script lang="ts">
  import { FlowChart } from '/@/components/FlowChart';
  export default {
    components: { FlowChart },
    setup() {},
  };
</script>

<style scoped></style>
