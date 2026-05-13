package com.jobportal.dto;

import java.util.Base64;
import java.util.List;

import com.jobportal.entity.Profile;

public class ProfileDTO {

    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private String picture;
    private Long totalExp;
    private List<String> skills;
    private List<Experience> experiences;
    private List<Certification> certifications;
    private List<Long> savedJobs;

    
    public ProfileDTO() {
    }

    
    public ProfileDTO(Long id, String name, String email, String jobTitle, String company,
                      String location, String about, String picture, Long totalExp,
                      List<String> skills, List<Experience> experiences,
                      List<Certification> certifications, List<Long> savedJobs) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.about = about;
        this.picture = picture;
        this.totalExp = totalExp;
        this.skills = skills;
        this.experiences = experiences;
        this.certifications = certifications;
        this.savedJobs = savedJobs;
    }

    // ✅ Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Long getTotalExp() {
        return totalExp;
    }

    public void setTotalExp(Long totalExp) {
        this.totalExp = totalExp;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<Experience> getExperiences() {
        return experiences;
    }

    public void setExperiences(List<Experience> experiences) {
        this.experiences = experiences;
    }

    public List<Certification> getCertifications() {
        return certifications;
    }

    public void setCertifications(List<Certification> certifications) {
        this.certifications = certifications;
    }

    public List<Long> getSavedJobs() {
        return savedJobs;
    }

    public void setSavedJobs(List<Long> savedJobs) {
        this.savedJobs = savedJobs;
    }

    // ✅ SAME method (unchanged)
    public Profile toEntity() {
        return new Profile(
                this.id,
                this.name,
                this.email,
                this.jobTitle,
                this.company,
                this.location,
                this.about,
                this.picture != null ? Base64.getDecoder().decode(this.picture) : null,
                this.totalExp,
                this.skills,
                this.experiences,
                this.certifications,
                this.savedJobs
        );
    }
}