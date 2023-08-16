import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),

    actions: {
        async fetchUser(){
            const res = await fetch();

            const user = await res.json();
            this.user = user;
        },

        async signUp(email, password) {
            const res = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password}),
            });
            const user = await res.json();
            this.user = user;
        },
    },
});