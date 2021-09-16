# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'
# Thing.create(name:Faker::Company.name )
# Thing.create(name:Faker::Company.name )

require 'faker'
Doctor.destroy_all
Patient.destroy_all
Appointment.destroy_all

d1 = Doctor.create(name:'Luis Mejia', phone:'385-999-6789')
d2 = Doctor.create(name:'Kelly Njord', phone:'379-999-3439')
d3 = Doctor.create(name:'Alejandro Bueno', phone:'385-999-6789')
d4 = Doctor.create(name:'Edward Zambrano', phone:'379-777-5555')
d5 = Doctor.create(name:'Lodimiro Franzua', phone:'385-999-6789')

doctors =[d1,d2,d3,d4,d5]

5.times do |i|
 patient = Patient.create(name: Faker::Name.name)
 5.times do |i|
  Appointment.create(time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), doctor_id: doctors[i].id, patient_id: patient.id)
 end
end

puts "DOCTOR SIZE: #{Doctor.all.length}"
puts "PATIENT SIZE: #{Patient.all.length}"
puts "APPOINTMENT SIZE: #{Appointment.all.length}"

# grab users skill
puts "FIRST PATIENT DOCTORS: #{Patient.first.doctors}"

# grab users firts skill grades
puts "FIRST PATIENT APPOINTMENT: #{Patient.first.appointments}"






