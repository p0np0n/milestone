Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  namespace :api, defaults: {format: :json} do
    namespace :rest, defaults: {format: :json} do
      namespace :v1, defaults: {format: :json} do
      end
    end

    namespace :graph, defaults: {format: :json} do
      namespace :v1, defaults: {format: :json} do
      end
    end
  end

  root "application#index"

  # Catch all for HTML 5 history routing. This must be the last route.
  get "/*path", to: "application#index", format: false
end
