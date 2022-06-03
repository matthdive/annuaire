<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Contact</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Formulaire contact</ion-card-subtitle>
          <ion-card-title>Ajouter un contact</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-input placeholder="Nom" required="true" v-model="contactForm.lastName" clear-input value=""></ion-input>
          <ion-input placeholder="Prénom" required clear-input value="" v-model="contactForm.firstName"></ion-input>
          <ion-input placeholder="Entreprise" required clear-input value="" v-model="contactForm.company"></ion-input>
          <ion-input placeholder="Numéro de téléphone" required clear-input value="" v-model="contactForm.phone">
          </ion-input>
          <ion-input placeholder="Adresse" required clear-input value="" v-model="contactForm.adress"></ion-input>
          <ion-input placeholder="Email" required clear-input value="" v-model="contactForm.email"></ion-input>
          <ion-button @click="createContact()" expand="block">Ajouter le contact</ion-button>

        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, setTransitionHooks } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { Contact } from '@/domains/contact.interface';
import contactCommand from '@/commands/contact.command';
import contactQuery from '@/query/contact.query';

export default defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput },
  data() {
    return {
      contactForm: {
        email : "",
        firstName: "",
        lastName: "",
        company: "",
        phone: 0,
        adress: "",
      } as Contact,
      contacts: [] as Array<Contact>
    }
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    createContact() {
      const contact: Contact = this.contactForm;
      contactCommand.createContact(contact);
      this.getContacts();
    },
    getContacts() {
      this.contacts = contactQuery.getContacts();
    },
  }
});
</script>
