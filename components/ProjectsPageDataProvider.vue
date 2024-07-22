<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
const { client } = usePrismic();
//   console.log('jheriu')
const { data: document } = await useAsyncData("page", async () => {
  const document = await client.getByUID("projects", "projects");
  if (document) {
    console.log(document);
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Source Not Found" });
  }
});
provide("ProjectsPageData", document);
</script>
