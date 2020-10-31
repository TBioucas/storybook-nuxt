<template>
  <div>
    <div v-if="loading">
      <div v-for="(n, index) in 5" :key="index" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </div>
    <div v-if="noTasks && !loading" class="list-items">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div v-if="showTasks" class="list-items">
      <Task
        v-for="(task, index) in tasksInOrder"
        :key="index"
        :task="task"
        @archivetask="$emit('archivetask', $event)"
        @pintask="$emit('pintask', $event)"
      />
    </div>
  </div>
</template>

<script>
import Task from './Task';
export default {
  name: 'PureTaskList',
  components: {
    Task,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    showTasks() {
      return !this.loading && !this.noTasks;
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter((t) => t.state === 'TASK_PINNED'),
        ...this.tasks.filter((t) => t.state !== 'TASK_PINNED'),
      ];
    },
  },
};
</script>
