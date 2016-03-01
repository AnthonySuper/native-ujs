require 'sinatra'

set :public_folder, "../out/"
get '/' do
  erb :index
end
