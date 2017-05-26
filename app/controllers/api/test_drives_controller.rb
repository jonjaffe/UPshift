class Api::TestDrivesController < ApplicationController
  def index
    @test_drives = TestDrive.where(user_id: current_user.id)
    render :index
  end

  def create
    @test_drive = TestDrive.new(test_drive_params)
    @test_drive.user_id = current_user.id
    @test_drive.save
    render :show
  end

  def show
    @test_drive = TestDrive.find(params[:id])
    render :show
  end

  def destroy
    @test_drive = TestDrive.find(params[:id])
    @test_drive.destroy
    render :show
  end

  private
  def test_drive_params
    params.require(:test_drive).permit(:car_id, :date)
  end
end
