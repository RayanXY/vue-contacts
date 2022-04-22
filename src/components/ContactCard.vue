<template>
   <div class="container">
      <div class="card p-3" style="max-width: 540px;">
         <div class="row no-gutters">
            <div class="col-md-3 col-lg-3">
               <img :src="contact.image" class="rounded my-auto" width="85" height="110" />
            </div>
            <div class="col-md-6">
               <div class="card-body">
                  <h4 class="card-title">{{ contact.name }}</h4>
                  <p class="card-text mb-0">{{ contact.number }}</p>
                  <p class="card-text">{{ contact.email }}</p>
               </div>
            </div>
            <div class="col-md-3">
               <button @click="selectDetails(contact.id)" class="btn btn-outline-secondary mt-1 mb-3">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABaUlEQVRIid2VPU7DQBCFPxzFDeEKHCDhDoQCShQilCtERAjIJVDEGaDi5zCIhoDABGjhAKYgBTHFzOIV2rXXSZcnjTbyzL63eZ5Zw7IjBnrADZAAXxoJcK25eF7yLvAOZCXxBuxVIY6AM4vgHjgCmsCqRgs4BsZW3Uj3lsKQfwP9kk0RcKC1RqQQXYt8M+Q0irYl0vEVxeSe9z01xg4XBpp7Bequgh655z5bigRqwIPm981Dm8h0wjkw85CsaLjwA1zob6dNL6re9BCEoKUciSuZarJRQFBkEcCa5lPzIKhvK8DY92exLfCh6/oCAmbvp0vgTtftBQR2dL11JU2bjpm/TR/516Y2YuTiypDxrypwqLkJnkEDmQVzVbR9RQ5sAVPk5e6WFY8skQHy132oISef6p7TkNNElkiGjP8JMkQNjQ1gSO75TMkrtX0HubjKPjgTAmzxoY50xBXwjExoCjwBl5rzvtDlwC8o13JbRpxVtAAAAABJRU5ErkJggg=="/>
               </button>
               <button @click="deleteContact(contact.id)" class="btn btn-danger">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAcUlEQVRIie2VzQ2AIAxGW+MW7sRMHh0U5niePIhoWtGokXcjKd8PByryC4CRLZPlrhbEqAmjqivNrkbsNMsbXDF/ewOTQZ7Q0/AdDZpBM2gGdfSWofwLzs9HPNYgicjgXD7JPAkEIBbW5B4RCI4wH2IGDpt3EfVw3qsAAAAASUVORK5CYII="/>
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      contact: { type: Object, required: true }
   },
   methods: {
      selectDetails(id) {
         localStorage.setItem('selectedIdDetails', id)
         window.location.href = '/contact-details'
      },
      deleteContact(id) {
         let result = confirm(`Do you want to delete ${this.contact.name}'s contact?`)
         if(result) {
            let contacts = JSON.parse(localStorage.getItem('contacts'))
            let index = contacts.findIndex(c => c.id === id)
            
            contacts.splice(index, 1)
            localStorage.setItem('contacts', JSON.stringify(contacts))

            this.$emit('deleted')
         }
      },
   },
}
</script>
