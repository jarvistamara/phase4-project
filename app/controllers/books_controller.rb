class BooksController < ApplicationController
    before_action :authorize

    def index
        user = User.find_by(id: session[:user_id])
        if user
            books = user.books
            render json: books
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            book = user.books.create(book_params)
            if book.valid?
                render json: book
            else
                render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: [Unauthorized] }, status: :unauthorized
        end
    end



    private

    def authorize
        return render json: { error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

    def book_params
        params.permit(:title, :content, :rating)
    end

end