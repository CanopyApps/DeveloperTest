require 'test_helper'

class CoursePackagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get course_packages_index_url
    assert_response :success
  end

end
