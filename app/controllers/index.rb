get '/' do
  erb :index
end

get '/gear' do
  content_type :json
  ["sign", "water", "good walking shoes", "phone for emergencies"].to_json
end

get '/resources' do
  sleep(5)
  content_type :json
  [{:description=>"Protect your phone from illegal police searches", :href=>"https://www.eff.org/press/archives/2011/06/27"}, 
    {:description=>"Nonviolent resistance training", :href=>"https://en.wikipedia.org/wiki/Nonviolent_resistance"}].to_json
end