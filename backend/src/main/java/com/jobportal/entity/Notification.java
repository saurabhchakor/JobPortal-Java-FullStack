
package com.jobportal.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.dto.NotificationStatus;

@Entity
@Table(name = "notification")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    private Long userId;
    private String message;
    private String action;
    private String route;

    @Enumerated(EnumType.STRING)
    private NotificationStatus status;

    private LocalDateTime timestamp;

    // No-Args Constructor
    public Notification() {
    }


    public Notification(Long id, Long userId, String message, String action, String route,
                        NotificationStatus status, LocalDateTime timestamp) {
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.action = action;
        this.route = route;
        this.status = status;
        this.timestamp = timestamp;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public NotificationStatus getStatus() {
        return status;
    }

    public void setStatus(NotificationStatus status) {
        this.status = status;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

  
    public NotificationDTO toDTO() {
        return new NotificationDTO(
                this.id,
                this.userId,
                this.message,
                this.action,
                this.route,
                this.status,
                this.timestamp
        );
    }
}