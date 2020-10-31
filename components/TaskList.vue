<template>
  <div>
    <PureTaskList
      :tasks="tasks"
      @archivetask="archivetask"
      @pintask="pintask"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PureTaskList from './PureTaskList';

export default {
  name: 'TaskList',
  components: {
    PureTaskList,
  },
  computed: {
    ...mapState(['tasks']),
  },
  methods: {
    ...mapActions(['archivetask', 'pintask']),
  },
};
</script>
