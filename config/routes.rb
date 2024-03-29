Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :edit, :update]
    resources :items, only: [:index, :show]
    resources :carts, only: [:index, :show, :create, :update, :destroy]
    resources :items, only: [:show] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :show, :destroy]
  end

  get '*path', to: 'static_pages#frontend_index'
end
