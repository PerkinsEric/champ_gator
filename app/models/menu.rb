class Menu < ApplicationRecord
    validates :name, :mtime, presence: true
end
