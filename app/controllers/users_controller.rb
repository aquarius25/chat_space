class UsersController < ApplicationController

  def new
  end

  def create
  end

  def edit
    @users = User.find(params[:id])
  end

  def update
  end

  def destroy
  end
end
