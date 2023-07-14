<template>
    <div>
        {{ coreCurrent }}
        <hr>
        {{ ystore.todos }}
    </div>
</template>

<script>
import { ystore } from "@/y_store";

export default {
    name: 'GraphView',
    data() {
        return {
            ystore,
        }
    },
    computed: {
        coreCurrent() {
            return this.$store.state.core.coreCurrent
        }
    }

}
</script>

<style scoped></style>
