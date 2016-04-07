class RenameBirthdateFromUsers < ActiveRecord::Migration
  def change
  	rename_column :users, :birthdate, :birthday
  end
end
