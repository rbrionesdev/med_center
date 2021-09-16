class Api::AppointmentsController < ApplicationController
  def index
    appointments = Appointment.all_and_then_some
    render json: appointments
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: { error: @appointment.errors }, status: 422
    end
  end

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointment_params
    params.require(:appointment).permit(:time, :patient_id, :doctor_id)
  end
end
