class Api::ReviewsController < ApplicationController
  before_action :set_user
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: @user.all
  end

  def show
    render json: @review
  end

  def create
    @review = @user.reviews .new(review_params)
    if @review.save
      render json: @review
    else
      render json: {errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @review.updat(review_params)
      renderjson: @review
    else
      render json: { errors: @review.errors }, status: : unprocessable_entity
    end
  end

  def destroy
    @review.destroy
    render json: { message: 'review deleted' }
  end

  private
    def review_params
      params.require(:reviews).permit(:score, :comment)
    end
    
    def set_user
      @user = User.find(params[user_id])
    end
    
    def set_review
      @review = @user.reviews.find(params[:id])
    end

end
