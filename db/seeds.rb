# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Brewery.destroy_all
Patron.destroy_all

10.times do
  s = Brewery.create(name: Faker::Games::ElderScrolls.region)
  4.times do 
    s.patrons.create(name: Faker::Games::ElderScrolls.name, drink: Faker::Movies::HarryPotter.spell)
  end
end
puts "seeded #{Brewery.all.size} Breweries"
puts "first brewery name: #{Brewery.first.name}"
puts "seeded #{Patron.all.size} Patrons"