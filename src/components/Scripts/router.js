import {createRouter, createWebHistory} from 'vue-router'
import home from '@/views/Home.vue'
import prijava from '@/views/prijava.vue'
import registracija from '@/views/registracija.vue'
import cart from '@/views/Cart.vue'
import about from '@/views/About.vue'
import uspesnaRegistracija from "@/components/uspesnaRegistracija";
import kosaricaUporabnika from "@/views/kosaricaUporabnika";
import seznamUporabnikov from "@/components/admin/seznamUporabnikov";
import preteklaNarocila from "@/views/preteklaNarocila";

const routes = [
    { path: '/', component: home, name:'home' },
    { path: '/prijava', component: prijava, name: 'prijava' },
    { path: '/registracija', component: registracija, name: 'registracija' },
    { path: '/cart', component: cart, name: 'cart' },
    { path: '/about', component: about, name: 'about'},
    { path: '/uspesnaRegistracija', component: uspesnaRegistracija, name: 'uspesnaRegistracija'},
    { path: '/kosaricaUporabnika', component: kosaricaUporabnika, name: 'kosaricaUporabnika'},
    { path: '/seznamUporabnikov', component: seznamUporabnikov, name: 'seznamUporabnikov'},
    { path: '/preteklaNarocila', component: preteklaNarocila, name: 'preteklaNarocila'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router