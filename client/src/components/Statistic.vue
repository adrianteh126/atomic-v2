<template>
  <h5 class="p-3 ps-4 mx-2 fw-bold ">Statistic 📊</h5>
  <div class="container-fluid">
    <div class="row">
      <!-- header -->
     <div class="section">
        <div class="row">
          <h5 class="fw-bold px-5 " id="taskStatus">
            This Week Completed: On Going:
          </h5>
          <div class="col-md-5" style="height: 80px">
            <canvas id="stackedBarChart" class="px-5"></canvas>
          </div>
        </div>
      </div>

      <h5 class="fw-bold px-5 pt-5">Overall Statistic</h5>
      <section class="content d-flex justify-content-center align-items-center">
        <div class="d-flex">
          <div
            class="col-md-4 py-2 px-5 border-0"
            style="border-right: 1px solid gray"
          >
            <canvas id="priorityChart"></canvas>
          </div>
          <div
            class="col-md-4 py-2 px-5 border-0"
            style="border-right: 1px solid gray"
          >
            <canvas id="statusChart"></canvas>
          </div>
          <div class="col-md-4 py-2 px-5 border-0">
            <canvas id="weeklyChart"></canvas>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticComponent",
};
</script>

<style></style>
