#!/usr/bin/env python3.5
import json
import sys
import requests

if __name__ == "__main__":
    print(requests.get("http://localhost:9000/category/" + sys.argv[1]).text)
