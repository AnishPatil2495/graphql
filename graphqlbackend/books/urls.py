from django.urls import path, include
from graphene_django.views import GraphQLView
from .shema import schema
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema)))
]
