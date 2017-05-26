json.set! @test_drive.id do
  json.id @test_drive.id
  json.user_id @test_drive.user_id
  json.car_id @test_drive.car_id
  json.date @test_drive.date
  # json.date Date.strptime(@test_drive.date).strftime('%m/%d/%Y')
end
