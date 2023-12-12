import { createApp } from 'vue'

createApp({
  data() {
    return {
      //inseriamo un array per random di 10 email

      emails: []
    }
  },
  methods: {
    generateEmails() {
        const apiLink = 'https://flynn.boolean.careers/exercises/api/random/mail';

    }
  }
}).mount('#app')