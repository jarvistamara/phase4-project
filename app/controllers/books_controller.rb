class BooksController < ApplicationController
    # before_action :authorize

    def index
        # byebug
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            books = user.books
            # byebug
            render json: books
        else
            render json: { errors: "There are no books in your library." }, status: :unauthorized
        end
    end

     # get one event
     def show 
        book = Book.find_by(id: params[:id])
        if book
            render json: book, status: :ok
        else
            render json: { errors: book.errors.full_messages }, status: :not_found 
        end
    end

    def create
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            book = user.books.create!(book_params)
            if book.valid?
                render json: book, include: :user, status: :unauthorized
            else
                render json: { errors: user.book.errors.full_messages }, status: :unprocessable_entity 
            end
        end
    end

    def update
        if session[:user_id]
            # byebug
            user = User.find_by(id: session[:user_id])
            # byebug
            book = user.books.find_by(id: params[:id])
            if book
                book.update(book_params)
                render json: book
            else
                render json: { errors: "Book not found" }, status: :not_found
            end
        end
    end

    def destroy
        if session[:user_id]
            # byebug
            user = User.find_by(id: session[:user_id])
            book = user.books.find_by(id: params[:id])
            if book
                book.destroy
                head :no_content
            else
                render json: { errors: "Book not found" }, status: :not_found
            end
            
        end
    end

    private


    def book_params
        params.permit(:title, :author, :genre, :summary, :description, :is_read, :book_cover)
    end

    def authorize
        return render json: { errors: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

end
