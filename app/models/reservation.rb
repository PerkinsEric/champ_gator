class Reservation < ApplicationRecord
  belongs_to :user
  validates :name, :rdate, presence: true
end
