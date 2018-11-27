<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addTodo"></todo-input>
    <todo-list :propsdata="todoItems" @removeTodo="removeTodo"></todo-list>
    <todo-footer v-on:removeAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import storage from './util/LocalStorage'

export default {
  data () {
    return {
      todoItems: []
    }
  },

  created () {
    if (storage.size() > 0) {
      for (let i=0; i<storage.size(); i++) {
        this.todoItems.push(storage.get(i))
      }
    }
  },
  
  methods: {
    addTodo (todoItem) {
      storage.add(todoItem)
      this.todoItems.push(todoItem)
    },
    clearAll () {
      storage.clearAll()
      this.todoItems = []
    },
    removeTodo (todoItem, index) {
      console.log('removeTodo !')
      storage.remove(index)
      this.todoItems.splice(index, 1)
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
