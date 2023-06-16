<template>
    <!-- Side Navbar -->
    <SideNavBar/>
    <!-- The To-Do-List Body -->
    <section class="home">
      <div class="container-fluid">
        <div class="row"> 
          <!-- Header -->
          <TopBar :currentUserName="currentUserName"/>
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
  import { onMounted, ref } from 'vue';
  import 'bootstrap/dist/js/bootstrap.bundle';

  export default {
    setup() {
      const { state, GetAllTodos, newTodo, deleteTodo, editTodo, GetTodoInProgress,GetTodoDone,GetTodoNow} = todocrud()
      const currentUserID = ref(null);
      const currentUserName = ref('');

      onMounted(() => {
        GetAllTodos()
        //check current userID using JWT token
        fetch('http://localhost:3000/checkUser', {
          method: 'GET',
          credentials: 'include' // Include this option to send cookies
        })
          .then(response => response.json())
          .then(data => {
            const currentUser = data.user;
            console.log(currentUser);
            // Handle the response data
            currentUserID.value = currentUser._id;
            currentUserName.value = currentUser.user_name;
            console.log('CurrentUserID = ' + currentUserID.value);
            console.log('CurrentUserName = ' + currentUserName.value);
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
          });

        // // Retrieve the JWT token from cookies
        // const cookies = document.cookie.split(';');
        // const JWTToken = cookies.find(cookie => cookie.trim().startsWith('jwt='));

        // // Request with the JWT token included in the headers
        // fetch('http://localhost:3000/authUser', {
        //   method: 'GET',
        //   credentials: 'include',
        //   headers: {
        //     Authorization: `Bearer ${JWTToken}`
        //   }
        // })
        //   .then(response => {
        //     if (response.ok) {
        //       // Handle the successful response
        //       return response.json();
        //     } else {
        //       location.assign('/login');
        //       // throw new Error('Request failed.');
        //     }
        //   })
        //   .then(data => {
        //     // Handle the response data
        //     console.log(data);
        //   })
        //   .catch(error => {
        //     // Handle any errors that occurred during the request
        //     console.error('Request error: ', error);
        //   });
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

      return { state, GetAllTodos, newTodo, deleteTodo, editTodo,GetTodoInProgress,GetTodoDone,GetTodoNow,getPriorityColor,
          currentUserID,currentUserName,     
        }
    },
      components : {
        SideNavBar,
        TopBar,
      },
    }
  </script>
  
  <style>
    @import '../assets/css/dashboard.css';
    @import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
  </style>