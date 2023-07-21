import graphene
from graphene_django import DjangoObjectType
from .models import Books


class BookType(DjangoObjectType):
    class Meta:
        model = Books
        fields = ("id", "name", "auther", "price", "availability", "introduction")


class Query(graphene.ObjectType):
    all_books = graphene.List(BookType)

    def resolve_all_books(root, info):
        return Books.objects.all()


class AddBooksMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        auther = graphene.String()
        price = graphene.Int()
        availability = graphene.Boolean()
        introduction = graphene.String()

    books = graphene.Field(BookType)

    @classmethod
    def mutate(cls, root, info, name, auther, price, availability, introduction):
        books = Books(
            name=name,
            auther=auther,
            price=price,
            availability=availability,
            introduction=introduction
            )
        books.save()
        return AddBooksMutation(books=books)


class UpdateBooksMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        name = graphene.String()
        auther = graphene.String()
        price = graphene.Int()
        availability = graphene.Boolean()
        introduction = graphene.String()

    books = graphene.Field(BookType)

    @classmethod
    def mutate(cls, root, info, id, name, auther, price, availability, introduction):
        books = Books.objects.get(id=id)
        books.name = name
        books.auther = auther
        books.price = price
        books.availability = availability
        books.introduction = introduction
        books.save()
        return UpdateBooksMutation(books=books)


class DeleteBooksMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    books = graphene.Field(BookType)

    @classmethod
    def mutate(cls, root, info, id):
        books = Books.objects.get(id=id)
        books.delete()


class Mutation(graphene.ObjectType):
    add_books = AddBooksMutation.Field()
    update_books = UpdateBooksMutation.Field()
    delete_books = DeleteBooksMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
