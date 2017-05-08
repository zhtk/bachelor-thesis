import logging
from django.http import HttpResponse
import json
import grpc
from zk import auth_pb2
from zk import auth_pb2_grpc
from zk import integrator

channel = grpc.insecure_channel('localhost:50051')
stub = auth_pb2_grpc.AuthServiceStub(channel)
integrator.zk.start()


def clean_node(n):
    n.pop('nr')
    n.pop('perm')
    return n


def parse_menu(path, perm):
    # noinspection PyBroadException
    try:
        (item, childs) = integrator.get_menu_node(path)
    except Exception:
        logging.exception("Problem with parsing menu node %s" % path)
        return []

    childs = list(map(lambda x: parse_menu(path + "/" + x, perm), childs))
    childs = list(filter(lambda x: integrator.check_permissions(x['perm'], perm), childs))
    childs = sorted(childs, key=lambda x: x['nr'])
    childs = list(filter(clean_node, childs))

    if path == '':
        return {
            'start': integrator.get_starting_endpoint(),
            'menu': childs,
        }

    item = json.loads(item)
    if 'perm' not in item:
        item['perm'] = ''

    return {
        "name": item['name'],
        "icon": item['icon'],
        "link": item['link'],
        "menu": childs,

        "nr": item['nr'],
        "perm": item['perm'],
    }


def get_menu(request):
    # noinspection PyBroadException
    try:
        token = request.GET.dict()['token']
    except Exception:
        logging.exception("Problem with getting token from request %s" % request.GET.dict())
        token = ''

    # noinspection PyBroadException
    try:
        response = stub.GetPermissions(auth_pb2.Token(token=token))
        perm = response.mask
    except Exception:
        logging.exception("Problem with getting permissions for token %s" % token)
        perm = ''

    return HttpResponse(json.dumps(parse_menu('', perm), ensure_ascii=False))
