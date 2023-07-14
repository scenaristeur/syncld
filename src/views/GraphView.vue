<template>
    <div>
        {{ coreCurrent != null && coreCurrent.id }}
        <hr>
        nodes : {{ nodes }}
        <hr>
        links: {{ links }}
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
        },
        nodes() {
            return this.ystore.todos.map(t => { return { id: t.id } })
        },
        links() {
            let all_props = this.ystore.todos.map(t => {
                if (t.properties != undefined) {
                    let props = []
                    for (let [label, prop] of Object.entries(t.properties)) {
                        console.log(label, prop.values)
                        prop.values.forEach(v => {
                            if (v.id != undefined) {
                                console.log(v)
                                let l = { source: t.id, label: label, target: v.id }
                                props.push(l)
                            }
                        });
                    }
                    return props
                }
            })
            console.log("all_props concatene")
            return all_props.filter(n => n) // remove null elements
        }
    }

}
</script>

<style scoped></style>
