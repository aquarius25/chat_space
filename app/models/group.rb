class Group < ApplicationRecord
  has_many :messages
  has_many :users, though: :group_users
  has_many :group_users
end
