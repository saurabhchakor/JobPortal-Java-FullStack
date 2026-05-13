//package com.jobportal.entity;
//
//import java.time.LocalDateTime;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Document(collection = "otp")
//public class OTP {
//	@Id
//	private String email;  
//    private String otpCode;
//    private LocalDateTime creationTime;
//}



package com.jobportal.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "otp")
public class OTP {

    @Id
    private String email;  

    private String otpCode;

    private LocalDateTime creationTime;

    // ✅ No-Args Constructor
    public OTP() {
    }

    // ✅ All-Args Constructor
    public OTP(String email, String otpCode, LocalDateTime creationTime) {
        this.email = email;
        this.otpCode = otpCode;
        this.creationTime = creationTime;
    }

    // ✅ Getters & Setters (Lombok removed)

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOtpCode() {
        return otpCode;
    }

    public void setOtpCode(String otpCode) {
        this.otpCode = otpCode;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(LocalDateTime creationTime) {
        this.creationTime = creationTime;
    }
}