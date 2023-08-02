<script setup>
import Bottom_bar from '../components/bottom_bar.vue';

</script>

<template>
    <section class="subscribe">
        <div class="sub_top">
            <div class="img">Back</div>
            <div class="sub_text">Subscribe</div>
        </div>
        <form action="">
        <MazInput label="Phone Number" v-model="phoneNum" required placeholder="09000000023" />
        <MazInput label="Network" v-model="network" placeholder="Select Network" required />
        <MazInput label="Duration" v-model="username" placeholder="Select Duration" required />
        <MazInput label="Amount" v-model="email" placeholder="Amount" required />
       
            <MazBtn @click="Pay" class="submit_btn">Pay</MazBtn>
        </form>
        <Bottom_bar/>        
    </section>
</template>