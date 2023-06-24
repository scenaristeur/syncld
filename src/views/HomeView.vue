<template>
  <main id="app">
    <h1>Todo Vue 
      <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 24 24"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z"></path></svg>

    </h1>

    <b-container>
      <b-row class="my-1">
        <b-col sm="10">
          <b-form-input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
            v-model="newTodo" @keyup.enter="addTodo" />
        </b-col>

        <b-col sm="2" @click="privacy = !privacy">
          <div v-if="privacy">
            <RiLockUnlockLine width="32" height="32" fill="rgba(250,200,0,1)" /> public
          </div>
          <div v-else>
            <RiLock2Line width="32" height="32" fill="rgba(0,250,0,1)" /> private
          </div>

        </b-col>
      </b-row>



      <b-row class="mt-5">
        <b-col md="6">
          <b-list-group>
            <b-list-group-item v-for="todo in Array.from(store.todos).reverse()" class="todo" :key="todo.title">
              <b-row>

                <b-col>
                  <input class="toggle" type="checkbox" v-model="todo.completed" />
                  {{ todo.title }}
                </b-col>
                <b-col>
                  <b-button variant="warning" @click="removeTodo(todo)">Delete</b-button>
                </b-col>
                <b-col sm="3" > 
                  <!-- {{ todo }} -->
                  <div v-if="todo.privacy == 'public'">
                    <RiLockUnlockLine @click="todo.privacy='private'" width="32" height="32" fill="rgba(250,200,0,1)" /> public
                  </div>
                  <div v-else>
                    <RiLock2Line @click="todo.privacy='public'" width="32" height="32" fill="rgba(0,250,0,1)" /> private
                  </div>
        
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import * as jsonld from 'jsonld';
import { store } from "@/y_store";
import { context } from "@/context";
import * as Vue from "vue";
import { enableVueBindings, observeDeep } from "@syncedstore/core";
import { RiLockUnlockLine, RiLock2Line } from "vue-remix-icons"


// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export default {
  name: "HomeView",
  components: {
    RiLockUnlockLine, RiLock2Line
  },
  data() {
    return {
      store, // Put the store on the data() of the component
      newTodo: "",
      privacy: true // public or not
    };
  },
  mounted() {
    observeDeep(this.store.todos, this.y_storeChanged)
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      let todo = {
        "@context": context,
        id: uuidv4(),
        type: "todo",
        title: value,
        completed: false,
        privacy: this.privacy ? "public" : "private",
        created: Date.now()
      }
      console.log(todo)
      this.store.todos.push(todo);
      this.expand(todo)
      this.newTodo = "";
    },
    async expand(t) {
      const expanded = await jsonld.expand(t);
      console.log(expanded);
      const compacted = await jsonld.compact(expanded, context);
      console.log(JSON.stringify(compacted, null, 2));
    },
    y_storeChanged(changes) {
      console.log("changes", changes)
    },
    removeTodo(todo) {
      this.store.todos.splice(this.store.todos.indexOf(todo), 1);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  text-align: left;
}

li button {
  margin-left: 1em;
}
</style>



