export const taskReducer = (state, action) => {
  if (action.type === "EMPTY_FIELD") {
    return {
      ...state,
      isAlertOpen: true,
      alertContent: "Please enter name and date!",
      alertClass: "danger",
    };
  }

  if (action.type === "CLOSE_ALERT") {
    return {
      ...state,
      isAlertOpen: false,
    };
  }

  if (action.type === "ADD_TASK") {
    console.log(action.payload);

    const allTask = [...state.tasks, action.payload];

    return {
      ...state,
      tasks: allTask,
      isAlertOpen: true,
      alertContent: "Task has been added!",
      alertClass: "success",
    };
  }

  if (action.type === "OPEN_EDIT_MODAL") {
    console.log(action.payload);

    return {
      ...state,
      isEditModalOpen: true,
      taskID: action.payload,
      modalTitle: "Edit Task",
      modalMsg: "ou are about to edit this task",
      modalActionText: "Edit",
    };
  }

  if (action.type === "EDIT_TASK") {
    return { ...state, isEditing: true };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isEditModalOpen: false, isDeleteModalOpen: false };
  }

  if (action.type === "UPDATE_TASK") {
    const updatedTask = action.payload;
    const id = action.payload.id;

    //Find task index

    const taskIndex = state.tasks.findIndex((task) => {
      return task.id === id;
    });

    //Replace the task by index
    if (taskIndex !== -1) {
      state.tasks[taskIndex] = updatedTask;
    }

    return {
      ...state,
      isEditing: false,
      isAlertOpen: true,
      alertContent: "Task edited successfully!",
      alertClass: "success",
    };
  }

  if (action.type === "OPEN_DELETE_MODAL") {
    return {
      ...state,
      taskID: action.payload,
      isDeleteModalOpen: true,
      modalTitle: "Delete Task",
      modalMsg: "ou are about to delete task!",
      modalActionText: "Delete",
    };
  }

  if (action.type === "DELETE_TASK") {
    const id = action.payload;
    const newTasks = state.tasks.filter((task) => task.id !== id);

    return {
      ...state,
      tasks: newTasks,
      isAlertOpen: true,
      alertContent: "Task deleted successfully!",
      alertClass: "success",
      isDeleteModalOpen: false,
    };
  }

  if (action.type === "COMPLETE_TASK") {
    const id = action.payload;

    //Find task index
    const taskIndex = state.tasks.findIndex((task) => {
      return task.id === id;
    });

    let updatedTask = {
      id: id,
      name: state.tasks[taskIndex].name,
      date: state.tasks[taskIndex].date,
      complete: true,
    };

    if (taskIndex !== -1) {
      state.tasks[taskIndex] = updatedTask;
    }

    return {
      ...state,
      isAlertOpen: true,
      alertContent: "Task Completed!",
      alertClass: "success",
    };
  }

  return state;
};
