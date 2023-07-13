<template>
    <div>
        <b-toast ref="toast" :toastClass="toastClass" v-model="toast.show" :title="toast.title" :body="toast.body"
            :variant="toast.variant">
        </b-toast>
    </div>
</template>

<script>
export default {
    name: "ToastComponent",
    data() {
        return {
            toast: {},
            toastClass: ['toast'],
        }
    },
    methods: {
        toasting(data) {
            this.toast.variant = data.variant || "info"
            this.toast.title = data.title
            this.toast.body = data.body
            this.toast.show = true
        },
    },
    watch: {
        toaster(v) {
            console.log(v)
            this.toasting(v)
        }
    },
    computed: {
        // toast(v){
        //     console.log("toast", v)
        //     this.toasting(v)
        // },
        toaster() {
            // `this` points to the component instance
            return this.$store.state.core.toaster
        }
    }
}
</script>

<style scoped>
.toast {
    position: absolute;
    bottom: 0px;
    left: 200px;
}
</style>