class CreateCoursePackages < ActiveRecord::Migration[6.0]
  def change
    create_table :course_packages do |t|
      t.string :name
      t.integer :number_of_months
      t.integer :price

      t.timestamps
    end
  end
end
