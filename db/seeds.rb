# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database
# with its default values.
# The data can then be loaded with the rails db:seed command
# (or created alongside the database with db:setup).

user = User.create_with(password: 'ok7777').find_or_create_by(email: 'ok@mail.ru') do |user|
  user.first_name = 'Mike'
  user.last_name = 'Dow'
  user.role = User.roles[:admin]
  user.confirmed_at = Time.now
end

user.update_attribute(:confirmed_at, Time.now) if user.confirmed_at.nil?

company = Company.create!(name: 'Test Company')

teams = Team.create!([
  { name: "Diamond", company: company },
  { name: "Ruby", company: company },
  { name: "Cristal", company: company },
  { name: "Green", company: company },
  { name: "Opal", company: company }
])

team_user = TeamUser.create!([
  {name: 'David', role: 0, team: teams[0]},
  {name: 'Mark', role: 1, team: teams[0]},
  {name: 'Den', role: 0, team: teams[0]},
  {name: 'Marat', role: 0, team: teams[1]},
  {name: 'Tomas', role: 0, team: teams[1]},
  {name: 'Gleb', role: 1, team: teams[1]},
])