create database JobPortal;

use JobPortal;
DROP DATABASE JobPortal;
show tables;
select * from job;
select * from profile;
select * from profile_certifications;
select * from job;
DROP TABLE profile_certifications;
DROP TABLE profile_experiences;
DROP TABLE profile;

select * from user;

select * from applicant;

select * from application;

select * from otp;

select * from profile;

DESC profile;

select * from profile_experiences;

ALTER TABLE profile
MODIFY id BIGINT NOT NULL AUTO_INCREMENT;

drop table user;