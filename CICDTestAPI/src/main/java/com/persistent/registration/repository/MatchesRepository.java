package com.persistent.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.persistent.registration.model.MatchTb;

public interface MatchesRepository extends JpaRepository<MatchTb, Integer>{

//	List<Match> findAll();

}
