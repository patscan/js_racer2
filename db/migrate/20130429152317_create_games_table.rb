class CreateGamesTable < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.string :game_time
      t.timestamps
    end
  end
end
