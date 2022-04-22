<template>
   <div class="container p-3">
      <div class="row justify-content-between mb-2">
         <div class="col-auto">
            <h2>Contacts List</h2>
         </div>
         <div class="col-auto">
            <a href="/add-contact" class="btn btn-primary">Add Contact</a>
         </div>
      </div>

      <div
         v-if="contacts.length > 0"
         class="row"
      >
         <div v-for="contact in contacts" :key="contact.id" class="col-4 mb-2">
            <contact-card :contact="contact" @deleted="deletedContact"/>
         </div>
      </div>

      <div v-else>
         Empty contact list
      </div>
   </div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue';

export default {
  components: { 
     ContactCard
   },
   data() {
      return {
         contacts: '',
      }
   },
   mounted() {
      this.getContacts()
   },
   methods: {
      getContacts() {
         if(localStorage.getItem('contacts') !== null) {
            this.contacts = JSON.parse(localStorage.getItem('contacts'))
         }
      },
      deletedContact() {
         this.getContacts()
      }
   }
};
</script>
