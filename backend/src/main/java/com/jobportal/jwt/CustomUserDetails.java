//package com.jobportal.jwt;
//
//import java.util.Collection;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.jobportal.dto.AccountType;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class CustomUserDetails implements UserDetails {
//	/**
//	 * 
//	 */
//	private static final long serialVersionUID = 1L;
//	private Long id;
//	private String username;
//	private String name;
//	private String password;
//	private Long profileId;
//	private AccountType accountType;
//	private Collection<?extends GrantedAuthority>authorities;
//
//}



package com.jobportal.jwt;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.jobportal.dto.AccountType;

public class CustomUserDetails implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String username;
    private String name;
    private String password;
    private Long profileId;
    private AccountType accountType;
    private Collection<? extends GrantedAuthority> authorities;

    // ✅ No-Args Constructor
    public CustomUserDetails() {
    }

    // ✅ All-Args Constructor
    public CustomUserDetails(Long id, String username, String name, String password,
                             Long profileId, AccountType accountType,
                             Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.password = password;
        this.profileId = profileId;
        this.accountType = accountType;
        this.authorities = authorities;
    }

    // ✅ Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    // ✅ Required methods (UserDetails)

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
