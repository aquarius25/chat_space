class UsersController < ApplicationController

  def edit
    @users = User.find(params[:id])
  end

end
