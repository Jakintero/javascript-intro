

#Index
get '/' do
  @todos = Todo.all
  erb :index
end


#Create
post '/add_todo' do
  @todo = Todo.new({todo_content: params[:todo_content]})
  if @todo.save
    redirect "/"
    # else
    #   erb :index
  end
end

#Show
get '/todos/:id' do
    @todo = Todo.find(params[:id])
    erb :show
end

#Destroy

get '/todos/:id/delete' do
  @todo = Todo.find(params[:id])
  @todo.destroy
  redirect '/'
end
