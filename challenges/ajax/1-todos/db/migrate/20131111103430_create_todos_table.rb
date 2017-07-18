class CreateTodosTable < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :todo_content

      t.timestamp
    end
  end
end
