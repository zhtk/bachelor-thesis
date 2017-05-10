#!/usr/bin/env python3
import requests
import sys

def get_value():
    return requests.get("http://localhost:9000/read/notify-get_variable/").text

def set_value(val):
    requests.post("http://localhost:9000/write/notify-set_variable/", data={"variable": val})

if __name__ == "__main__":
    value = requests.get("http://localhost:9000/read/notify-get_variable/")
    print("value: %s" % get_value())
    if len(sys.argv) > 1:
        set_value(sys.argv[1])
        print("new value: %s" % get_value())
