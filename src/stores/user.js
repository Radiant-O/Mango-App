import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),

    actions: {
        async fetchUser(){
            const res = await fetch("http://localhost:5001/api/users/current");

            const user = await res.json();
            this.user = user;
        },

        async signUp(fname, lname, uname, email, password, phone ) {
            const res = await fetch("http://localhost:5001/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fname, lname, uname, email, password, phone }),
            });

            const user = await res.json();
            this.user = user;
        },

        async logIn(email, password){
            const res = await fetch("http://localhost:5001/api/users/login", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const user = await res.json();
            this.user = user;
            
        }
    },
});