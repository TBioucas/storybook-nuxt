<template>
  <div>
    <PureInboxScreen :error="error" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PureInboxScreen from '@/components/PureInboxScreen';

export default {
  name: 'InboxScreen',
  components: {
    PureInboxScreen,
  },
  computed: {
    ...mapState(['error']),
  },
};
</script>
