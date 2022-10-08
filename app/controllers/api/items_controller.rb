class Api::ItemsController < ApplicationController
  before_action :set_parent
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: @menu.item.all
  end

  def show
    render json: @item
  end

  def create
    @item = @menu.item.new(item_params)
    if @item.save
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
    render json: { message: 'item deleted' }
  end


  private
    def items_params
      params.require(:item_name, :price, :desc)
    end

    def set_item
      @item = @menu.item.find(params[:id])
    end

    def set_parent
      @menu = Menu.find(params[:house_id])
    end  
    
end
