<template>
  <PrimeVueDataTable :value="data">
    <PrimeVueColumn field="offer.name" header="Product name"></PrimeVueColumn>
    <PrimeVueColumn header="Price">
      <template #body="slotProps">
        {{slotProps.data.offer.price}} {{ slotProps.data.offer.currency_iso }}
      </template>
    </PrimeVueColumn>
    <PrimeVueColumn header="Link">
      <template #body="slotProps">
        <a :href="slotProps.data.offer.link">Link</a>
      </template>
    </PrimeVueColumn>
    <PrimeVueColumn header="Image">
      <template #body="slotProps">
        <PrimeVueImage :src="slotProps.data.image" height="20" preview />
      </template>
    </PrimeVueColumn>
    <PrimeVueColumn header="Merchant">
      <template #body="slotProps">
        <PrimeVueImage :src="slotProps.data.merchant.logo_url" height="20"/>
      </template>
    </PrimeVueColumn>
  </PrimeVueDataTable>
</template>

<script>

export default {
  name: 'DataPreview',
  data() {
    return {
      data: []
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      const url = "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=nintendo_switch&area=GB"
      fetch(url)
        .then(response => response.json())
        .then(data => data.widget.data.offers)
        .then(data => this.data = data)
    }
  },

}
</script>
