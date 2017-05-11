#!/usr/bin/env python3.5

#http://flask.pocoo.org/docs/0.12/quickstart/
import json

from flask import request

import app_global_state
import conf
from app_global_state import get_userdata_cache
from auth import get_user_id


class UserData:
    def __init__(self, user_id):
        self.user_id = user_id

    def __repr__(self):
        return self.user_id

    def __str__(self):
        return repr(self)

def get_userdata_for_token(token: str) -> UserData:
    userdata_cache = get_userdata_cache()
    if token not in userdata_cache:
        userdata_cache[token] = UserData(user_id=get_user_id(token))
    return userdata_cache[token]


@app_global_state.app.route('/get_sent_emails/<token>', methods=['GET'])
def get_sent_emails(token: str):
    user_data = get_userdata_for_token(token)
    json_output = json.dumps([{
        "id": 1,
        "from": user_data.user_id,
        "to": "Urząd Skarbowy nr 2 w Radomiu",
        "date": "2017-01-01",
        "topic": "Dzień dobry",
        "content": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }])
    print("I'm sending json\n%s" % json_output)
    print("User_data is %s" % user_data)
    return json_output


@app_global_state.app.route('/send_email/<token>', methods=['POST'])
def send_email(token: str):
    user_data = get_userdata_for_token(token)
    req = request.get_json()
    print("I'm sending email to={to}, topic={topic}, content={content}"
          .format(to=req["to"], topic=req["topic"], content=req["content"]))
    print("User_data is %s" % user_data)
    return '', 204


if __name__ == '__main__':
    app_global_state.app.run(port=conf.port)


    # TODO:
    # - integrator (kazoo)
    # - run.sh
    # - autoryzacja
    # - baza danych in-memory
    # - a na końcu baza danych sqlite
