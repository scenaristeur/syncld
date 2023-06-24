<template>
  <main id="app">
    <h1>Todo Vue</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo"
      @keyup.enter="addTodo" />
    <ul class="todo-list">
      <li v-for="todo in Array.from(store.todos).reverse()" class="todo" :key="todo.title">
        <div class="view">
          <label>
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            {{ todo.title }}
          </label>
          <button class="destroy" @click="removeTodo(todo)">Delete</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import * as jsonld from 'jsonld';
import { store } from "@/y_store";
import { context } from "@/context";
import * as Vue from "vue";
import { enableVueBindings, observeDeep } from "@syncedstore/core";

// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export default {
  name: "HomeView",
  data() {
    return {
      store, // Put the store on the data() of the component
      newTodo: ""
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



