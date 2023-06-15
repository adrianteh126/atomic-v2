<template>
    <!-- Side Navbar -->
    <SideNavBar/>
    <!-- The To-Do-List Body -->
    <section class="home">
      <div class="container-fluid">
        <div class="row"> 
          <!-- Header -->
          <TopBar/>
          <!-- The Dashboard Body(Todos, Settings & Statistic) -->
          <router-view></router-view>
        </div>
      </div>
    </section>




  </template>

  <script>
  import SideNavBar from '@/components/SideNavBar.vue';
  import TopBar from '@/components/TopBar.vue';
  import todocrud from '../modules/todocrud';
  import { onMounted } from 'vue';
  import 'bootstrap/dist/js/bootstrap.bundle';



  export default {
    
    
    setup() {

      const { state, GetAllTodos, newTodo, deleteTodo, editTodo, GetTodoInProgress,GetTodoDone,GetTodoNow} = todocrud()


      onMounted(() => {
        GetAllTodos()
      })


    const getPriorityColor = (priority) => {
      if (priority === 'Low') {
        return '#78d700';
      } else if (priority === 'Medium') {
        return '#ffa048';
      } else if (priority === 'High') {
        return '#ff7979';
      }
      return '';
    };

      return { state, GetAllTodos, newTodo, deleteTodo, editTodo,GetTodoInProgress,GetTodoDone,GetTodoNow,getPriorityColor}
    },
      components : {
        SideNavBar,
        TopBar,

      }
    }
  </script>
  
  <style>
    @import '../assets/css/dashboard.css';
    @import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
  </style>