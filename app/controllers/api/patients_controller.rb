class Api::PatientsController < ApplicationController
before_action :set_patient, only: [:show, :update, :destroy]

  def index
    patients = Patient.all
    render json: patients
  end

  def show
    render json: @patient
  end

  def create
    @patient = Patient.new(params[:patient_params])
    if @patient.save
      render json: @patient
    else
      render json: { error: @patient.errors }, status: 442
    end
  end

  def update
    if @patient.update(patient_params)
      render json: @patient
    else
      render json: { error: @patient.errors }, status: 442
    end
  end

  def destroy
    @patient.destroy
    render json: @patient
  end

  private

  def set_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:name)
  end
end
