class MessagesController < ApplicationController
  protect_from_forgery expect: :create
  before_action :devise_session

  def index
    @messages = Message.all
  end

  def new
  end

  def create
    Message.create(text: message_params[:text],image: message_params[:image])
    redirect_to action: :index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def message_params
    params.permit(:text, :image)
  end

  def devise_session
    redirect_to new_user_session_path unless user_signed_in?
  end
end
