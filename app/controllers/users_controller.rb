class UsersController < ApplicationController

  def edit
    @users = User.find(params[:id])
  end

  def update
  end

  def destroy
  end
end
