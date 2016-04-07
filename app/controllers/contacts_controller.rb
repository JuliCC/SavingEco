class ContactsController < ApplicationController

  def create
  	@contact = Contact.new(contact_params)
  	if @contact.save
      ContactMailer.contact(@contact).deliver_now
      redirect_to root_path, notice: "Message sent"
  		
  	else
  		redirect_to root_path, notice: "Message not sent"
      
  	end
  end

  def contact_params
  	params.require(:contact).permit(:name, :email, :phone, :subject, :content)
  end

end
