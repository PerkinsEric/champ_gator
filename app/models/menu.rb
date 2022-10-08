class Menu < ApplicationRecord

    has_many :items, dependent: :destroy

    validates :name, :mtime, presence: true
end
