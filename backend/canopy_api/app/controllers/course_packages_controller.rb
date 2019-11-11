class CoursePackagesController < ApplicationController
  def index
    course_packages = CoursePackage.order("created_at DESC")
    render json: course_packages
  end

  def create
    course_package = CoursePackage.create(course_package_params)
    render json: course_package
  end

  def destroy
    course_package = CoursePackage.find_by_id(params[:id])
    if course_package
      course_package.destroy
      render json: "Course successfully deleted"
    else
      render json: "Course not found"
    end
  end

  private
  def course_package_params
    params.require(:course_package).permit(:name, :number_of_months, :price)
  end
end
