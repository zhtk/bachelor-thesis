#!/usr/bin/env python3
import requests

if __name__ == "__main__":
    r = requests.post("http://localhost:9000/write/notify-print_to_stdout/", data={"key": "value"})
