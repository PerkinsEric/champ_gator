class Review < ApplicationRecord
  belongs_to :user


  validates :score, :comment, presence: true
end
