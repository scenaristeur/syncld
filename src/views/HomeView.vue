<template>
  <main id="app">
    <h1>Todo Vue
      <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
        <path
          d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z">
        </path>
      </svg>

    </h1>

    <b-container>
      <b-row class="my-1">
        <b-col sm="10">
          <b-form-input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
            v-model="newTodo" @keyup.enter="addTodo" />
        </b-col>

        <b-col sm="2" @click="privacy = !privacy">
          <div v-if="privacy">
            <RiLockUnlockLine width="20" height="20" fill="rgba(250,200,0,1)" /> public
          </div>
          <div v-else>
            <RiLock2Line width="20" height="20" fill="rgba(0,250,0,1)" /> private
          </div>

        </b-col>
      </b-row>



      <b-row class="mt-5">

        <!--CURRENT -->
        <b-col v-if="current != null">



          <b-button-toolbar key-nav aria-label="Toolbar with button groups">
            <b-button-group class="mx-1">
              <b-button @click="copy(current)" variant="outiline">
                <RiClipboardLine width="20" height="20" fill="rgba(0,0,250,1)" />
              </b-button>

              <!-- <b-button>&laquo;</b-button>
              <b-button>&lsaquo;</b-button> -->
            </b-button-group>
            <!--<b-button-group class="mx-1">
              <b-button>Edit</b-button>
              <b-button>Undo</b-button>
              <b-button>Redo</b-button>
            </b-button-group> -->
            <b-button-group class="mx-1">
              <b-button @click="current = null" variant="outline">
                <RiCloseCircleLine width="20" height="20" />
              </b-button>
            </b-button-group>




            <b-button-group class="mx-5">
              <b-button size="sm" variant="outline-danger" @click.stop="removeTodo(current)">
                <RiDeleteBinLine width="20" height="20" fill="rgba(250,0,0,1)" />
              </b-button>
            </b-button-group>

          </b-button-toolbar>

          name: <b-form-input autofocus autocomplete="off" placeholder="name" v-model="current.name" />
          description :
          <b-form-textarea v-model="current.description" placeholder="description..." rows="3"
            max-rows="6"></b-form-textarea>

          proposition:
          <b-form-textarea v-model="current.proposition" placeholder="proposition..." rows="3"
            max-rows="6"></b-form-textarea>

          <b-button @click="paste" variant="outline">
            <RiAddCircleFill width="20" height="20" fill="rgba(0,0,250,1)" />
          </b-button>

          <b-button @click="paste" variant="outline">
            <RiPencilLine width="20" height="20" fill="rgba(0,0,250,1)" />
          </b-button>

          <b-button @click="paste" variant="outline">
            <RiAttachment2 width="20" height="20" fill="rgba(0,0,250,1)" />
          </b-button>
          <b-button @click="paste" variant="outline">
            <RiLink width="20" height="20" fill="rgba(0,0,250,1)" />
          </b-button>
          <br>
          {{ current }}
        </b-col>







        <b-col md="6">

          <!-- LIST -->

          <b-list-group>
            <b-button :pressed="listMode == 'streched'" variant="success" size="sm"
              @click="listMode == 'stretched' ? listMode = 'expanded' : listMode = 'stretched'">{{ listMode }}</b-button>
            <div class="scroll">
              <b-list-group-item button
                v-for="todo in Array.from(store.todos).sort((t1, t2) => t2.lastEdit - t1.lastEdit)" class="todo"
                :key="todo.id" @click="setCurrent(todo)">

                <b-row>
                  <b-col>
                    <b-button @click.stop="copy(todo)" variant="outiline" :size="sm">
                      <RiClipboardLine width="20" height="20" fill="rgba(0,0,250,1)" />
                    </b-button>
                  </b-col>

                  <b-col>
                    <input class="toggle" type="checkbox" v-model="todo.completed" @click.stop
                      v-if="listMode == 'expanded'" />
                    {{ todo.name }}
                  </b-col>

                  <b-col v-if="listMode == 'expanded'">
                    <!-- {{ todo }} -->
                    <div v-if="todo.privacy == 'public'">
                      <RiLockUnlockLine @click.stop="todo.privacy = 'private'" width="20" height="20"
                        fill="rgba(250,200,0,1)" />
                    </div>
                    <div v-else>
                      <RiLock2Line @click.stop="todo.privacy = 'public'" width="20" height="20" fill="rgba(0,250,0,1)" />
                    </div>

                  </b-col>
                </b-row>
                <b-row v-if="listMode == 'expanded'"> <small>{{ since(todo.lastEdit) }}</small></b-row>
              </b-list-group-item>
            </div>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>

    <b-toast variant="info" ref="toast" v-model="toast.show" :title="toast.title" :body="toast.body">

    </b-toast>
  </main>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import * as jsonld from 'jsonld';
import { store } from "@/y_store";
import { context } from "@/context";
import * as Vue from "vue";
import { enableVueBindings, observeDeep } from "@syncedstore/core";
import { RiLockUnlockLine, RiLock2Line, RiClipboardLine, RiDeleteBinLine, RiCloseCircleLine, RiAttachment2, RiPencilLine, RiAddCircleFill, RiLink } from "vue-remix-icons"


// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export default {
  name: "HomeView",
  components: {
    RiLockUnlockLine, RiLock2Line, RiClipboardLine, RiDeleteBinLine, RiCloseCircleLine, RiAttachment2, RiPencilLine, RiAddCircleFill, RiLink
  },
  data() {
    return {
      store, // Put the store on the data() of the component
      newTodo: "",
      privacy: true, // public or not
      current: null,
      toast: {},
      listMode: 'stretched'
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
        name: value,
        completed: false,
        privacy: this.privacy ? "public" : "private",
        created: Date.now(),
        lastEdit: Date.now()
      }
      console.log(todo)
      this.store.todos.push(todo);
      this.expand(todo)
      this.newTodo = "";
    },
    setCurrent(t) {
      t.lastEdit = Date.now()
      this.current = t
    },
    copy(t) {
      console.log(t)
      if (navigator.clipboard) { // default: modern asynchronous API
        navigator.clipboard.writeText(t.id);
      } else if (window.clipboardData && window.clipboardData.setData) {     // for IE11
        window.clipboardData.setData('Text', t.id);
      }

      this.toast.title = t.name + " copied" // en gras
      // this.toast.body = t.name + " copied" // en normal
      this.toast.show = true
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
      this.current = null
    },
    since(value) {
      // const array = getYjsValue(this.y_store.todos);
      // console.log(array)
      return this.secondsToHms((new Date() - new Date(value)) / 1000)
    },
    secondsToHms(d) {
      d = Number(d);
      var a = Math.floor(d / 31557600);
      var m = Math.floor(d / 2592000);
      var j = Math.floor(d / 86400);
      var h = Math.floor(d / 3600);
      var min = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      var display = ''
      display = a > 0 ? a + 'a' : m > 0 ? m + 'm' : j > 0 ? j + 'j' : h > 0 ? h + 'h' : min > 0 ? min + 'min' : s + 's'
      return display//hDisplay + mDisplay + sDisplay;
    },
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

.scroll {
  background-color: lightblue;
  height: 650px;
  overflow-y: scroll;
}
</style>



