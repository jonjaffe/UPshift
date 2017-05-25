class CreateTestDrives < ActiveRecord::Migration[5.0]
  def change
    create_table :test_drives do |t|
      t.integer :user_id, null: false
      t.integer :car_id, null: false
      t.date :date, null: false
      t.timestamps
    end
    add_index :test_drives, [:car_id, :date], unique: true
  end
end
