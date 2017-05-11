#!/usr/bin/env python3.5
import argparse

import requests


def run():
    parser = argparse.ArgumentParser()
    parser.add_argument("--to")
    parser.add_argument("--topic")
    parser.add_argument("--content")
    args = parser.parse_args()
    print(requests.get("http://localhost:3001/get_sent_emails/admin1").text)
    if args.to and args.topic and args.content:
        print("Sending")
        requests.post("http://localhost:3001/send_email/admin", json={
            "to": args.to,
            "topic": args.topic,
            "content": args.content
        })
    print(requests.get("http://localhost:3001/get_sent_emails/admin").text)

if __name__ == "__main__":
    run()
