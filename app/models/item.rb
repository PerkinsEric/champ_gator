class Item < ApplicationRecord
  belongs_to :menu

  validates :item_name, :price, :desc, presence: true
end
