class BooksController < ApplicationController
    before_action :authorize
    before_action :current_user
    before_action :set_book, only: [:show, :update, :destroy]
    before_action :book_found?, only: [:show, :update, :destroy]

    def index
        books = @user.books
        render json: books
    end

     def show 
        render json: @book, status: :ok
    end

    def create
        book = @user.books.create!(book_params)
        if book.valid?
            render json: book, include: :user, status: :unauthorized
        else
            render json: { errors: user.book.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def update
        @book.update(book_params)
        render json: @book
    end

    def destroy
        @book.destroy
        head :no_content
    end

    private

    def book_found?
        render json: { errors: "Book not found"}, status: :not_found unless @book
    end

   
    def set_book
        @book = @user.books.find_by(id: params[:id])
    end

    def book_params
        params.permit(:title, :author, :genre, :summary, :description, :is_read, :book_cover)
    end

    

end
