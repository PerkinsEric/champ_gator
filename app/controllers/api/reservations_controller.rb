class Api::ReservationsController < ApplicationController
  before_action :set_user
  before_action :set_reservation, except: [:index, :create, :unenrolledUsers]

  def index
    render json: @user.reservations
  end

  def show
    render json: @reservation
  end

  def create
    @reservation = @user.reservations.new(reservation_params)
    if @reservation.save
      render json: @reservation
    else
      render json: { errors: @reservation.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: { errors: @reservation.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @reservation.destroy
    render json: { message: 'Unreserved' }
  end

  def unreservedUsers
    @users = User.all - @user.users 
    render json: @users
  end

  private 
    def reservation_params
      params.require(:reservation).permit(:user_id)
    end

    def set_user
      @user = user.find(params[:user_id])
    end

    def set_reservation
      @reservation = @user.reservations.find(params[:id])
    end
end
