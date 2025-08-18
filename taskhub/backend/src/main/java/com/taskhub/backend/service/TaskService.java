package com.taskhub.backend.service;

import com.taskhub.backend.dto.TaskUpdateRequest;
import com.taskhub.backend.exception.ResourceNotFoundException;
import com.taskhub.backend.model.Task;
import com.taskhub.backend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public Task updateTask(Long id, TaskUpdateRequest request) {
        Task existing = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found with id " + id));

        if (request.getTitle() != null) {
            existing.setTitle(request.getTitle());
        }

        if (request.getDescription() != null) {
            existing.setDescription(request.getDescription());
        }

        if (request.getCompleted() != null) {
            existing.setCompleted(request.getCompleted());
        }

        return taskRepository.save(existing);
    }
}
