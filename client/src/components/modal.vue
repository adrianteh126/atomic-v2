<template lang="">
        <!-- Modal -->
        <div class="modal fade" id="modal_edit" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
            <h5 class="modal-title" id="taskModalLabel">Modify Task Information 🖌️</h5>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="modalTaskName" class="form-label">Task Name</label>
                    <br>
                    <input type="text" class="form-control" v-model="state.EditT_name" placeholder="New task name" style="color: grey;" >
                </div>
                <div class="mb-3">
                    <label for="modalTaskDesc" class="form-label"
                        >Task Description</label
                    >
                    <input type="text" class="form-control" placeholder="Task Description" v-model="state.EditT_description" style="color: grey;">
                </div>
                <div class="mb-3">
                    <label for="modalTaskProgress">Task Progress (1-10)</label>
                    <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="100"
                        step="10"
                        id="modalTaskProgress"
                        v-model="state.EditT_progress"
                        
                    />
                </div>
                <div class="mb-3">
                    <label for="modalTaskDueDate" class="form-label"
                        >Task Due Date</label
                    >
                    <input type="text" class="form-control" placeholder="YEAR-MM-DD" >
                </div>
                <div class="mb-3">
                    <label for="modalTaskPriority">Task Priority</label>
                    <select class="form-select" id="modalTaskPriority" v-model="state.EditT_priority" >
                        <option value="Low Priority">Low</option>
                        <option value="Medium Priority">Medium</option>
                        <option value="High Priority">High</option>
                    </select>
                </div>
            </form>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" id="modalCloseBtn" @click="closeEditModal" class="btn btn-secondary">Close</button>
            <div id="button-container">
              <button type="button" id="modalSaveBtn" @click="saveEditAndClose" class="btn btn-success">Save Changes</button>
              <button type="button" id="modalDeleteBtn" @click="deleteTodo" class="btn btn-danger ms-2">Delete Task</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>