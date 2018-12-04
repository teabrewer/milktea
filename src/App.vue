<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addTodo"></todo-input>
    <todo-list :propsdata="todoItems" @removeTodo="removeTodo" @listItemKeyupEnter="updateTodo"></todo-list>
    <todo-footer v-on:removeAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import Storage from './util/LocalStorage'

export default {
  data () {
    return {
      todoItems: []
    }
  },

  created () {
    if (Storage.size() > 0) {
      for (let i=0; i<Storage.size(); i++) {
        this.todoItems.push(Storage.get(i))
      }
    }
  },
  
  methods: {
    refresh () {
      this.todoItems = Storage.getAll()
    },
    addTodo (todoItem) {
      Storage.add(todoItem)
      this.todoItems.push(todoItem)
    },
    clearAll () {
      Storage.clearAll()
      this.todoItems = []
    },
    removeTodo (todoItem, index) {
      Storage.remove(index)
      this.todoItems.splice(index, 1)
    },
    updateTodo (val, idx) {
      Storage.set(idx, val)
      alert('update success !')
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
