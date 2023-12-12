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

        for (let i = 0; i < 10; i++){
            axios.get(apiLink)
            .then(response = {
                this.emails.push(response.data);
            })
        }

    }
  }
}).mount('#app')