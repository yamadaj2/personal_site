class RemoveTitleFromParagraph < ActiveRecord::Migration
  def change
    remove_column :paragraphs, :title, :string
  end
end
