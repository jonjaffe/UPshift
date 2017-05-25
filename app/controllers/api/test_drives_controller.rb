class Api::TestDrivesController < ApplicationController
  def index
    @test_drives = TestDrive.where(user_id: current_user.id)
    render :index
  end
end
