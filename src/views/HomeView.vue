<template>
  <main id="app">

    <b-toast ref="toast" :toastClass="toastClass" v-model="toast.show" :title="toast.title" :body="toast.body"
      :variant="toast.variant">
    </b-toast>
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

              <b-button @click="fork(current)" variant="outiline">
                <RiGitBranchLine width="20" height="20" fill="rgba(0,0,250,1)" />
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




            <b-button-group class="mx-1">
              <b-button size="sm" variant="outline-danger" @click.stop="removeTodo(current)">
                <RiDeleteBinLine width="10" height="10" fill="rgba(250,0,0,1)" />
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

          <b-button @click="addPropShow = true" variant="outline" v-if="addPropShow != true">
            <RiAddCircleFill width="20" height="20" fill="rgba(0,0,250,1)" />
          </b-button>





          <b-form-input v-if="addPropShow == true" autofocus autocomplete="off" placeholder="add a prop..."
            v-model="newProp" @keyup.enter="addProp" />


          <div class="scroll">
            <b-card>
              <div id="my-accordion" class="accordion" role="tablist">
                <b-card no-body class="mb-1" v-for="p in currentPropertiesSorted" :key="p[0]">
                  <!-- {{ p[0] }} / {{ p[1] }} -->

                  <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
                    <b-button @click="currentProp == p[0] ? currentProp = null : currentProp = p[0]" variant="info">

                      {{ p[0] }} ,
                      {{ since(current.properties[p[0]].lastEdit) }} / ({{ current.properties[p[0]].values.length }})
                      values
                      /

                      <!-- <b-button @click.stop="currentProp = p[0] ? currentProp = null : currentProp = p[0] " variant="outline" title="edit">
                        <RiPencilLine width="32" height="22" fill="rgba(0,0,250,1)" />
                      </b-button> -->
                    </b-button>
                  </b-card-header>

                  <b-collapse :visible="currentProp == p[0]" accordion="my-accordion" role="tabpanel">

                    <div>
                      <b-button @click="edit" variant="outline" title="edit">
                        <RiPencilLine width="20" height="20" fill="rgba(0,0,250,1)" />
                      </b-button>

                      <span v-if="clipboard.length > 0">
                      <b-button @click="paste(null)" variant="outline" title="paste">
                        <RiAttachment2 width="20" height="20" fill="rgba(0,0,250,1)" />
                      </b-button>
                      <b-button @click="openPaste = true" variant="outline" title="paste">
                        <RiAttachmentLine width="20" height="20" fill="rgba(0,0,250,1)" />
                      </b-button>
                      </span>

                      <b-button @click="link" variant="outline" title="link">
                        <RiLink width="20" height="20" fill="rgba(0,0,250,1)" />
                      </b-button>


                    </div>
                    <div v-if="textAreaShow">
                      <b-form-textarea v-model="textAreaValue" placeholder="Enter a text value..." rows="3"
                        max-rows="6"></b-form-textarea>
                      <b-button @click="saveTextArea" variant="outline" title="link">
                        <RiSave3Fill width="32" height="32" fill="rgba(0,250,0,1)" />
                      </b-button>
                    </div>


                    <b-list-group-item
                      v-for="v in Array.from(current.properties[p[0]].values).sort((a, b) => b.lastEdit - a.lastEdit) "
                      :key="v.id">

                      <div v-if="v.id != undefined">

                        <!-- node {{ v }} -->
                        <b-button @click.stop="switchTo(v.id)" variant="outline-success" title="switch to">
                          {{ v.name }}
                        </b-button>


                      </div>
                      <div v-else-if="v.type == 'http://www.w3.org/2001/XMLSchema#string'">
                        {{ v.value }}
                      </div>
                      <div v-else>
                        {{ v }}
                      </div>


                      {{ since(v.lastEdit) }}
                      <hr>
                    </b-list-group-item>








                  </b-collapse>




                </b-card>

                <!-- <b-card no-body class="mb-1" v-for="p in currentPropertiesSorted" :key="p">
                  <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
                    <b-button v-b-toggle="'collapse-' + p" variant="info">
                      {{ p }} , {{ since(current.properties[p].lastEdit) }} / ({{ current.properties[p].values.length }})
                      values
                      /
                      <b-button @click.stop="this.currentProp = p" variant="outline" title="edit">
                        <RiPencilLine width="32" height="22" fill="rgba(0,0,250,1)" />
                      </b-button>


                    </b-button>
                  </b-card-header>
                  <b-collapse :id="'collapse-' + p" accordion="my-accordion" role="tabpanel">
                    <b-card-body>


                      


                    </b-card-body>
                  </b-collapse>
                </b-card>
              -->

              </div>
            </b-card>
          </div>

          <!-- <b-list-group>
            {{ currentPropertiesSorted }}
            <div class="scroll">
              <b-list-group-item button @click="this.currentProp = p" v-for="p in currentPropertiesSorted" :key="p">
                <b-row>
                  <b-col> {{ p }} <br> {{ since(current.properties[p].lastEdit) }}</b-col>
                  <b-col>
                    <b-list-group-item button @click.stop v-for="v in current.properties[p].values " :key="v.id">
                      {{ v }}
                    </b-list-group-item>
                  </b-col>
                </b-row>




              </b-list-group-item>

            </div>
          </b-list-group> -->


          <!-- <hr>
          <hr>
          {{ current.properties }}
          <hr>


          <br>
          {{ current }} -->

          <b-modal v-model="openPaste" title="clipboard">
            <b-button disabled>Paste all</b-button> <b-button disabled>clear</b-button>
            <b-list-group>
              <b-list-group-item button v-for="c of clipboard" :key="c.id" @click="paste(c)">{{ c.name }}, {{ c.id
              }}</b-list-group-item>
            </b-list-group>
          </b-modal>
        </b-col>



        <b-col md="6">

          <!-- LIST -->

          <b-list-group>
            <b-button :pressed="listMode == 'streched'" variant="success" size="sm"
              @click="listMode == 'stretched' ? listMode = 'expanded' : listMode = 'stretched'">{{ listMode }}</b-button>
            <div class="scroll">
              <b-list-group-item button
                v-for="todo in Array.from(store.todos).sort((t1, t2) => t2.lastEdit - t1.lastEdit)" :key="todo.id"
                @click="setCurrent(todo)">

                <b-row>
                  <b-col>
                    <b-button @click.stop="copy(todo)" variant="outiline" size="sm">
                      <RiClipboardLine width="20" height="20" fill="rgba(0,0,250,1)" />
                    </b-button>
                  </b-col>

                  <b-col>
                    <input class="toggle" type="checkbox" v-model="todo.completed" @click.stop
                      v-if="listMode == 'expanded'" />
                    {{ todo.name }}
                  </b-col>
                  <b-col> <small>{{ since(todo.lastEdit) }}</small></b-col>
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

              </b-list-group-item>
            </div>
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
import {
  RiLockUnlockLine, RiLock2Line,
  RiClipboardLine, RiDeleteBinLine, RiCloseCircleLine,
  RiAttachmentLine, RiAttachment2, RiPencilLine,
  RiAddCircleFill, RiLink, RiGitBranchLine, RiSave3Fill
} from "vue-remix-icons"

import { vBToggle } from 'bootstrap-vue-3';

// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export default {
  name: "HomeView",
  directives: {
    'b-toggle': vBToggle
  },
  components: {
    RiLockUnlockLine, RiLock2Line, RiClipboardLine,
    RiDeleteBinLine, RiCloseCircleLine, RiAttachmentLine,
    RiAttachment2, RiPencilLine, RiAddCircleFill, RiLink, RiGitBranchLine,
    RiSave3Fill
  },
  data() {
    return {
      store, // Put the store on the data() of the component
      newTodo: "",
      privacy: true, // public or not
      current: null,
      toast: {},
      listMode: 'stretched',
      newProp: "",
      toastClass: ['toast'],
      addPropShow: false,
      currentProp: null,
      clipboard: [],
      openPaste: false,
      textAreaShow: false,
      textAreaValue: "",
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
      this.toasting({ title: "created", body: todo.name })
    },
    addProp() {
      if (this.newProp.trim().length == 0) return
      console.log(this.newProp)
      this.current.properties == undefined ? this.current.properties = {} : ""
      this.currentProp = this.newProp
      this.current.properties[this.currentProp] == undefined ? this.current.properties[this.currentProp] = { lastEdit: Date.now(), values: [] } : ""

      this.newProp = ""
      this.addPropShow = false
      this.textAreaShow = false
    },
    setCurrent(t) {
      this.textAreaShow = false,
        this.textAreaValue = ""
      t.lastEdit = Date.now()
      this.current = t
      this.toasting({ title: "current", body: t.name })
    },
    switchTo(id) {
      console.log(id)
      let current = this.store.todos.find(x => x.id == id)
      console.log(current.name)
      this.setCurrent(current)


    },
    copy(t) {

      if (navigator.clipboard) { // default: modern asynchronous API
        navigator.clipboard.writeText(t.id);
      } else if (window.clipboardData && window.clipboardData.setData) {     // for IE11
        window.clipboardData.setData('Text', t.id);
      }
      this.clipboard.unshift({ id: t.id, name: t.name })
      console.log("copy", t.name)

      this.toasting({ title: "copied", body: t.name, variant: "info" })
    },
    async paste(pastor) {
      console.log(pastor)
      console.log(this.clipboard)
      pastor == null ? pastor = this.clipboard[0] : ""
      console.log('paste', pastor.id, pastor.name)
      let pasted = { id: pastor.id, name: pastor.name, comment: "not sure for the name id must be sufficient", lastEdit: Date.now() }
      if (this.currentProp != null) {
        this.current.properties[this.currentProp].values.push(pasted)
      }
    },
    edit() {
      console.log('edit')
      this.textAreaShow = true
      this.textAreaValue = ""
    },
    saveTextArea() {
      console.log(this.textAreaValue)
      let v = this.textAreaValue.trim()
      if (this.currentProp != null && v.length > 0) {
        let value = {
          "value": v,
          "type": "http://www.w3.org/2001/XMLSchema#string",
          lastEdit: Date.now()
        }
        this.current.properties[this.currentProp].values.push(value)
        this.current.properties[this.currentProp].lastEdit = Date.now()
      }
      this.newProp = ""
      this.textAreaShow = false
    },
    link() {
      console.log('link should open multi source, google / duckduck / dbpedia / solid /AV....')
    },
    toasting(data) {
      this.toast.variant = data.variant || "info"
      this.toast.title = data.title
      this.toast.body = data.body
      this.toast.show = true
    },
    clickValue(v) {
      console.log(v)
    },
    fork(t) {
      console.log("forking", t)
      this.toasting({ title: "forked", body: t.name })
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
  },
  computed: {
    currentPropertiesSorted: function () {
      return this.current.properties == undefined ? [] : Object.entries(this.current.properties).sort((a, b) => b[1].lastEdit - a[1].lastEdit);
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

.scroll {
  background-color: lightblue;
  max-height: 650px;
  overflow-y: scroll;
}

.toast {
  position: absolute;
  bottom: 0px;
  left: 200px;
}
</style>



