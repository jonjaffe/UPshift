class Api::TestDrivesController < ApplicationController
  def index
    @test_drives = TestDrive.where(user_id: current_user.id)
    render :index
  end

  def create
    @test_drive = TestDrive.create(test_drive_params)
    render :index
  end

  def destroy
    @test_drive = TestDrive.find(params[:id])
    @test_drive.destroy
    render :index
  end

  private
  def test_drive_params
    params.require(:test_drive).permit(:user_id, :car_id, :date)
  end
end
