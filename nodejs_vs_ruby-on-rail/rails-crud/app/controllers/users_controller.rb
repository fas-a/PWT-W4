# app/controllers/users_controller.rb
class UsersController < ApplicationController
    before_action :set_user, only: [:show, :edit, :update, :destroy]
  
    # GET /users
    def index
      @users = User.all
    end
  
    # GET /users/new
    def new
      @user = User.new
    end
  
    # POST /users
    def create
      @user = User.new(user_params)
  
      if @user.save
        redirect_to users_path, notice: 'User was successfully created.'
      else
        render :new
      end
    end
  
    # PATCH/PUT /users/:id
    def update
      if @user.update(user_params)
        redirect_to users_path, notice: 'User was successfully updated.'
      else
        render :edit
      end
    end
  
    # DELETE /users/:id
    def destroy
      @user.destroy
      redirect_to users_path, notice: 'User was successfully destroyed.'
    end
  
    private
      # Set the user before action
      def set_user
        @user = User.find(params[:id])
      end
  
      # Only allow a list of trusted parameters
      def user_params
        params.require(:user).permit(:name, :email)
      end
  end
  