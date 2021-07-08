class BooksController < ApplicationController
    before_action :authorize

    def index
        books = Book.all
        render json: books
    end

    def show
        user = User.find_by(id: session[:user_id])
        books = user.books
        render json: books
    end

    def create
        user = User.find_by(id: session[:user_id])
        book = user.books.create(book_params)
        render json: book
        
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :is_read, :is_unread, :book_cover)
    end

    def authorize
        return render json: { error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

end
