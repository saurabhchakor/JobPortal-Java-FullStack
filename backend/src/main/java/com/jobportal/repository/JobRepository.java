package com.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jobportal.dto.ApplicationStatus;
import com.jobportal.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

    @Query("SELECT j FROM Job j JOIN j.applicants a WHERE a.applicantId = ?1 AND a.applicationStatus = ?2")
    List<Job> findByApplicantIdAndApplicationStatus(Long applicantId, ApplicationStatus applicationStatus);

    List<Job> findByPostedBy(Long postedBy);
    

}