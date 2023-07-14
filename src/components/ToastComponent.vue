<template>
    <b-toast ref="toast" :toastClass="toastClass" v-model="toast.show" :title="toast.title" :body="toast.body"
        :variant="toast.variant">
    </b-toast>
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
        toaster() {
            return this.$store.state.core.toaster
        }
    }
}
</script>

<style>
.toast {
    position: absolute;
    top: -100px;
    z-index: 10
}
</style>