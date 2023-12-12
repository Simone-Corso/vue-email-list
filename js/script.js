

const { createApp } = Vue;

createApp({
    data() {
        return {

            // inseriamo la variabile per array
            emails: []
        };
    },
    created() {
        console.log('emails'); 
        this.generateEmails();
    },
    methods: {
        generateEmails() {
            const apiLink = 'https://flynn.boolean.careers/exercises/api/random/mail';

            for (let i = 0; i < 10; i++) {
                axios.get(apiLink)
                    .then(response => {
                        this.emails.push(response.data.response);
                    });
            }
        }
    }
}).mount('#app');
