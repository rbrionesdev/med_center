class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :update, :destroy]

  def index
    doctors = Doctor.all
    render json: doctors
  end

  def show
    render json: @doctor
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      render json: @doctor
    else
      render json: { error: @doctor.errors }, status: 442
    end
  end

  def update
    puts "update called"
    if(@doctor.update(doctor_params))
      render json: @doctor
    else
      render json: { error: @doctor.errors }, status: 442
    end
  end

  def destroy
    @doctor.destroy
    render json: @doctor
  end

  private

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end

  def doctor_params
    params.require(:doctor).permit(:name, :phone)
  end
end
