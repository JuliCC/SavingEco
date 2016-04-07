class UsersController < ApplicationController



	def show
		@user = User.find(params[:id])
	end

 def contact_params
  	params.require(:user).permit(:username)
  end
end
