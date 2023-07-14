import { v4 as uuidv4 } from "uuid";
import { context } from "@/context";
import * as jsonld from "jsonld";
import { ystore } from "@/y_store";
//import { enableVueBindings, observeDeep } from "@syncedstore/core";
//import * as Vue from "vue";

//enableVueBindings(Vue);

export default {
  install(app, options) {
    // configure the app
    console.log(app, options);
    let store = options.store
    console.log(store)
    // observeDeep(store.todos, this.y_storeChanged);
    app.config.globalProperties.$addTodo = async (value) => {
      let todo = {
        "@context": context,
        id: uuidv4(),
        type: "todo",
        name: value,
        completed: false,
        privacy: this.privacy ? "public" : "private",
        created: Date.now(),
        lastEdit: Date.now(),
      };
      console.log(todo);
      ystore.todos.push(todo);
      await app.config.globalProperties.$expand(todo);
      return todo;
    },
      (app.config.globalProperties.$expand = async (t) => {
        const expanded = await jsonld.expand(t);
        console.log(expanded);
        const compacted = await jsonld.compact(expanded, context);
        console.log(JSON.stringify(compacted, null, 2));
      })

    // (app.config.globalProperties.$y_storeChanged = (changes) => {
    //   console.log("changes", changes);
    // })
  },
};
