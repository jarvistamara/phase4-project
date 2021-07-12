class BooksController < ApplicationController
    before_action :authorize

    def index
        # byebug
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            books = user.books
            # byebug
            render json: books
        else
            render json: { error: "There are no books in your library." }, status: :unauthorized
        end
    end

     # get one event
     def show 
        book = Book.find_by(id: params[:id])
        if book
            render json: book, status: :ok
        else
            render json: { error: book.errors.full_messages }, status: :not_found 
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

    def update
        if session[:user_id]
            user = User.find_by(id: session[:user_id]
            book = Book.find(id: params[:id])
            if book
                book.update(book_params)
                render json: book
            else
                render json: { error: "Book not found" }, status: :not_found
            end
        end
    end

    def destroy
        book = Book.find_by(id: params[:id])
        if book
            book.destroy
            head :no_content
        end
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :summary, :description, :is_read, :book_cover)
    end

    def authorize
        return render json: { error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

end
