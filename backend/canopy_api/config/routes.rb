Rails.application.routes.draw do
  scope 'api/v1' do 
    resources :course_packages
  end
end
