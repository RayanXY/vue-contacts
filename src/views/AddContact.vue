<template>
   <div class="container p-3">
      <div class="card p-3 form-group">
         <div class="row justify-content-between mb-2">
            <div class="col-auto">
               <h2>Add Contact</h2>
            </div>
            <div class="col-auto">
               <a href="/" class="btn btn-primary">Back</a>
            </div>
         </div>
         <div class="mb-2">
            <label for="inputName">Name</label>
            <input id="inputName" class="form-control" type="text" v-model="name" placeholder="John Doe">
         </div>
         <div class="mb-2">
            <label for="inputNumber">Number</label>
            <input id="inputNumber" class="form-control" type="text" v-model="number" placeholder="123456789">
         </div>
         <div class="mb-2">
            <label for="inputEmail">E-mail</label>
            <input id="inputEmail" class="form-control" type="email" v-model="email" placeholder="example@mail.com">
         </div>
         <div class="mb-2">
            <label for="inputImage">Image</label>
            <input id="inputImage" class="form-control" type="file" @change="imageChange" placeholder="E-mail" accept="image/*">
         </div>
         <button :disabled="!image" class="mt-2 btn btn-primary" @click="save">Save</button>
      </div>

      <div v-if="errors.length">
         <strong>Please, correct the following errors:</strong>
         <ul>
            <li v-for="(error, index) in errors" :key="index">
               {{ errors }}
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         id: '',
         name: '',
         number: '',
         email: '',
         image: '',
         errors: [],
      }
   },
   methods: {
      imageChange(e) {
         this.createImage(e.target.files[0])
      },
      save() {
         let contact = {
            id: Date.now(),
            name: this.name,
            email: this.email,
            image: this.image,
            number: this.number,
         }

         let isValid = this.validateInputs(contact)

         if(isValid) {
            if(localStorage.getItem('contacts') === null) {
               let contacts = []
               contacts.push(contact)
               localStorage.setItem('contacts', JSON.stringify(contacts))
            } else {
               let contacts = JSON.parse(localStorage.getItem('contacts'))
               contacts.push(contact)
               localStorage.setItem('contacts', JSON.stringify(contacts))
            }
            alert("Contact was added!")
            this.resetForm()
         }
      },
      createImage(img) {
         let reader = new FileReader()
         reader.onload = (e) => {
            this.image = e.target.result
         }
         reader.readAsDataURL(img)
      },
      resetForm() {
         this.id = ''
         this.name = ''
         this.number = ''
         this.email = ''
         this.image = ''
      },
      validateInputs(contact) {
         if(!contact.name || contact.name.length < 5) {
            this.errors.push('Name is required and should have at least 5 characters')
         }
         if(!contact.number || isNaN(contact.number) || contact.number.length !== 9) {
            this.errors.push('Number is required and should have 9 numbers (only numbers)')
         }
         if(!contact.email || this.validEmail(contact.email)) {
            this.errors.push('E-mail is required and should valid')
         }
         if(!contact.image) {
            this.errors.push('Image is required')
         }
         if(this.errors.length) {
            return true
         } else {
            return false
         }
      },
      validEmail(email) {
         var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email)
      }
   }
}
</script>
   