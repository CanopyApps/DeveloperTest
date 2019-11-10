class CoursePackagesController < ApplicationController
  def index
    course_packages = CoursePackage.order("created_at DESC")
    render json: course_packages
  end

  def create
    course_package = CoursePackage.create(course_package_params)
    render json: course_package
  end

  private
  def course_package_params
    params.require(:course_package).permit(:name, :number_of_months, :price)
  end
end
