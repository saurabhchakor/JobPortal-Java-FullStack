package com.jobportal.api;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.jobportal.repository.JobRepository;
import com.jobportal.repository.UserRepository;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminApi {

    @Autowired
    private JobRepository jobRepo;

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/dashboard")
    public Map<String, Object> getDashboard() {

        long totalJobs = jobRepo.count();
        long totalUsers = userRepo.count();

        long totalApplications = jobRepo.findAll().stream()
                .flatMap(job -> job.getApplicants().stream())
                .count();

        long hired = jobRepo.findAll().stream()
                .flatMap(job -> job.getApplicants().stream())
                .filter(a -> "ACCEPTED".equals(a.getApplicationStatus()))
                .count();

        long rejected = jobRepo.findAll().stream()
                .flatMap(job -> job.getApplicants().stream())
                .filter(a -> "REJECTED".equals(a.getApplicationStatus()))
                .count();

        Map<String, Object> data = new HashMap<>();
        data.put("totalJobs", totalJobs);
        data.put("totalUsers", totalUsers);
        data.put("totalApplications", totalApplications);
        data.put("hired", hired);
        data.put("rejected", rejected);

        return data;
    }
}