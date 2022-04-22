<template>
   <div class="container p-3" style="max-width: 450px">
      <div class="card p-3 form-group">
         <div class="row justify-content-between mb-2">
            <div class="col-auto">
               <h2>Contact Details</h2>
            </div>
            <div class="col-auto">
               <a href="/" class="btn btn-primary">Back</a>
            </div>
         </div>
         <div>
            <img :src="contact.image" class="rounded mx-auto d-block" width="85" height="110" />
         </div>
         <div class="mb-2">
            <label for="inputName">Name</label>
            <input id="inputName" class="form-control" type="text" readonly :value="contact.name">
         </div>
         <div class="mb-2">
            <label for="inputNumber">Number</label>
            <input id="inputNumber" class="form-control" type="text" readonly :value="contact.number">
         </div>
         <div class="mb-2">
            <label for="inputEmail">E-mail</label>
            <input id="inputEmail" class="form-control" type="email" readonly :value="contact.email">
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         contact: '',
      }
   },
   mounted() {
      let id = localStorage.getItem('selectedIdDetails')
      let contacts = JSON.parse(localStorage.getItem('contacts'))

      this.contact = contacts.find(c => c.id === parseInt(id))
   }
}
</script>