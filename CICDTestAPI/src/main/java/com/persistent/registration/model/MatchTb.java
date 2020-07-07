package com.persistent.registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class MatchTb {

	@Id
	private int matchId;
	
	private String matchType;
	
	private String groundName;
	
	private String oppositeTeam;
	
	private String matchDate;
	
	public String getMatchType() {
		return matchType;
	}
	public void setMatchType(String matchType) {
		this.matchType = matchType;
	}
	public String getGroundName() {
		return groundName;
	}
	public void setGroundName(String groundName) {
		this.groundName = groundName;
	}
	public String getOppositeTeam() {
		return oppositeTeam;
	}
	public void setOppositeTeam(String oppositeTeam) {
		this.oppositeTeam = oppositeTeam;
	}
	public String getMatchDate() {
		return matchDate;
	}
	public void setMatchDate(String matchDate) {
		this.matchDate = matchDate;
	}
	
	
	public String toString() {
		return "Match [matchId=" + matchId + ", matchType=" + matchType + ", groundName=" + groundName
				+ ", oppositeTeam=" + oppositeTeam + ", matchDate=" + matchDate + "]";
	}
	
	
	public MatchTb() {
		super();
		
	}
	public MatchTb(int matchId, String matchType, String groundName, String oppositeTeam, String matchDate) {
		super();
		this.matchId = matchId;
		this.matchType = matchType;
		this.groundName = groundName;
		this.oppositeTeam = oppositeTeam;
		this.matchDate = matchDate;
	}
	public int getMatchId() {
		return matchId;
	}
	public void setMatchId(int matchId) {
		this.matchId = matchId;
	}
	
	
	
	
}
