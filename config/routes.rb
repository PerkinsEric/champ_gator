Rails.application.routes.draw do
  namespace :api do
    resources :reviews 
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
 
  namespace :api do
    resources :menus 

    resources :users do
      resources :reservations
    end
      
  end
end