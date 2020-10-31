export const state = () => ({
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
});

export const mutations = {
  ARCHIVE_TASK(state, id) {
    state.tasks.find((task) => task.id === id).state = 'TASK_ARCHIVED';
  },
  PIN_TASK(state, id) {
    state.tasks.find((task) => task.id === id).state = 'TASK_PINNED';
  },
};

export const actions = {
  archivetask({ commit }, id) {
    commit('ARCHIVE_TASK', id);
  },
  pintask({ commit }, id) {
    commit('PIN_TASK', id);
  },
};
