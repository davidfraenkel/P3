package com.p3.gruppe4.Models.Live;

import java.util.Date;

public class Meeting {

    private Chat chat;
    private Date meetingDate;

    public Meeting() {
        this.chat = new Chat();
    }

    public void setMeetingDate(Date meetingDate) {
        this.meetingDate = meetingDate;
    }
}
