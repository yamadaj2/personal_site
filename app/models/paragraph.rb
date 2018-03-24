class Paragraph < ActiveRecord::Base
  validates :text, presence: true
end
