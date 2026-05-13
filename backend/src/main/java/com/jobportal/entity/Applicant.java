


package com.jobportal.entity;

import java.time.LocalDateTime;
import java.util.Base64;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Lob;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.ApplicationStatus;

@Embeddable
public class Applicant {

    private Long applicantId;
    private String name;
    private String email;
    private Long phone;
    private String website;


    
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] resume;

    private String coverLetter;
    private LocalDateTime timestamp;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus applicationStatus;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime interviewTime;

    // ✅ No-Args Constructor
    public Applicant() {
    }

    // ✅ All-Args Constructor
    public Applicant(Long applicantId, String name, String email, Long phone, String website,
                     byte[] resume, String coverLetter, LocalDateTime timestamp,
                     ApplicationStatus applicationStatus, LocalDateTime interviewTime) {
        this.applicantId = applicantId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.resume = resume;
        this.coverLetter = coverLetter;
        this.timestamp = timestamp;
        this.applicationStatus = applicationStatus;
        this.interviewTime = interviewTime;
    }

    // ✅ Getters & Setters (Lombok removed)

    public Long getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(Long applicantId) {
        this.applicantId = applicantId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public byte[] getResume() {
        return resume;
    }

    public void setResume(byte[] resume) {
        this.resume = resume;
    }

    public String getCoverLetter() {
        return coverLetter;
    }

    public void setCoverLetter(String coverLetter) {
        this.coverLetter = coverLetter;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public ApplicationStatus getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(ApplicationStatus applicationStatus) {
        this.applicationStatus = applicationStatus;
    }

    public LocalDateTime getInterviewTime() {
        return interviewTime;
    }

    public void setInterviewTime(LocalDateTime interviewTime) {
        this.interviewTime = interviewTime;
    }

    // ✅ SAME method (unchanged)
    public ApplicantDTO toDTO() {
        return new ApplicantDTO(
                this.getApplicantId(),
                this.getName(),
                this.getEmail(),
                this.getPhone(),
                this.getWebsite(),
                this.getResume() != null ? Base64.getEncoder().encodeToString(this.getResume()) : null,
                this.getCoverLetter(),
                this.getTimestamp(),
                this.getApplicationStatus(),
                this.interviewTime
        );
    }
}