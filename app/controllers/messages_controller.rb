class MessagesController < ApplicationController

  def index
    @messages = Message.all
  end

  def new
  end

  def create
    Message.create(name:message_params[:name],text:message_params[:text],image:message_params[:image])
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
    params.permit(:name, :text, :image)
  end
end
