class BooksController < ApplicationController
    before_action :authorize

    def index
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            books = user.books
            # byebug
            render json: books
        else
            render json: { error: "There are no books in your library." }, status: :unauthorized
        end
    end

    def create
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            book = user.books.create!(book_params)
            if book.valid?
                render json: book, include: :user, status: :unauthorized
            else
                render json: { error: user.book.errors.full_messages }, status: :unprocessable_entity 
            end
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :description, :summary)
    end

    def authorize
        return render json: { error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

end
