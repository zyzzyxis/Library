class Patron < ApplicationRecord
  belongs_to :brewery, dependent: :destroy
end
