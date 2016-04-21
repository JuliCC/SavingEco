class UsersController < ApplicationController



	def show
		@user = User.find(params[:id])
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to users_path
    end

 def contact_params
  	params.require(:user).permit(:username)
  end
end
