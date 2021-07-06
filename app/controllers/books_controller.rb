class BooksController < ApplicationController
    
    def index
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.books, includer: :user
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            book = user.books.create(book_params)
            if book.valid?
                render json: book, include: user, status: :created
            else
                render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: [Unauthorized] }, status: :unauthorized
        end
    end



    private

    def book_params
        params.permit(:title, :content, :rating)
    end

end