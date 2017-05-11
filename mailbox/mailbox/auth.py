from werkzeug.exceptions import abort


def get_user_id(token):
    if token == 'admin':
        return '9901020300001'
    abort(403, "invalid token, only 'admin' supported")
