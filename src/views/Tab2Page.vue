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
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-accordion-group>
        <div v-if="contacts.length > 0">
          <div v-for="(contact, index) in contacts" :key="index">
            <ion-accordion value="">
              <ion-item slot="header">
                <ion-label>{{ contact.firstName }} {{ contact.lastName }}</ion-label>
                <ion-button @click="deleteContact(index)" color="danger">delete</ion-button>
                <ion-button color="primary">update</ion-button>
                <ion-button color="warning">favoris</ion-button>
              </ion-item>
              <ion-list slot="content">
                <ion-item>
                  <ion-label>Phone number : {{ contact.phone }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Email : {{ contact.email }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Company : {{ contact.company }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Address : {{ contact.adress }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </div>
        </div>
        <div v-if="contacts.length === 0">
          <p style="color: red">You don't have any Contacts</p>
        </div>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Contact } from '@/domains/contact.interface';
import contactCommand from '@/commands/contact.command';
import contactQuery from '@/query/contact.query';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      contacts: [] as Array<Contact>
    }
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      this.contacts = contactQuery.getContacts();
    },
    deleteContact(index:number) {
      return contactCommand.deleteContact(index);
    },
    // favContact() {

    // },
    // updateContact {

    // },
  }
});
</script>

