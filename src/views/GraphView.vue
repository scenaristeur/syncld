<template>
    <div>
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
    }

}
</script>

<style scoped></style>