
$(document).ready(function() {
    let taskList = [];

    $('#add-task-btn').on('click', function() {
        let task = $('#task-input').val();
        if (task !== '') {
            taskList.push(task);
            $('#task-input').val('');
            renderTaskList();
        }
    });

    function renderTaskList() {
        $('#task-list').html('');
        taskList.forEach(function(task, index) {
            let taskHTML = `
                <li>
                    <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
                    <label for="task-${index}">${task.task}</label>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </li>
            `;
            $('#task-list').append(taskHTML);
        });
    }

    $(document).on('click', '.delete-btn', function() {
        let index = $(this).data('index');
        taskList.splice(index, 1);
        renderTaskList();
    });

    $(document).on('change', 'input[type="checkbox"]', function() {
        let index = $(this).attr('id').split('-')[1];
        taskList[index].completed = $(this).prop('checked');
        renderTaskList();
    });
});