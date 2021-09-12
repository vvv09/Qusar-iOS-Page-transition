<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-button-back
          label="Questions"
        />
      </template>
      <template #title>Answer</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">How do I do this?</div>

        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Ad architecto autem consectetur consequuntur
          dignissimos ea earum eos ex incidunt magnam,
          nam natus nesciunt provident quam quo reprehenderit
          sequi soluta totam.
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>

export default ({
  name: 'Answer'
})

</script>
