import { createWebHistory, createRouter } from "vue-router";

import AddContact from '@/views/AddContact.vue';
import ContactList from '@/views/ContactsList.vue';
import ContactDetails from '@/views/ContactDetails.vue';

const routes = [
   { path: "/", component: ContactList },
   { path: "/add-contact", component: AddContact },
   { path: "/contact-details", component: ContactDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
