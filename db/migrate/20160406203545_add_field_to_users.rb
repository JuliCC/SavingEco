class AddFieldToUsers < ActiveRecord::Migration
  def change
    add_column :users, :code, :string
  end
end
