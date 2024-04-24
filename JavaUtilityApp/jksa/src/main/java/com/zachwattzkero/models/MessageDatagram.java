package com.zachwattzkero.models;

public class MessageDatagram {
    private String key, value;

    public MessageDatagram() {}
    public MessageDatagram(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() { return this.key; }
    public String getValue() { return this.value; }
}
