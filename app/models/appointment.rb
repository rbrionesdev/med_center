class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  def self.all_and_then_some
    appointments = Appointment.all
    appointments.map do |appointment|
      {id: appointment.id, patient: appointment.patient, doctor: appointment.doctor}
    end
  end
end
