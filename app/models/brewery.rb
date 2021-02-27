class Brewery < ApplicationRecord
  has_many :patrons, dependent: :destroy 
end
