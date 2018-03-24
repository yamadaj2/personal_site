class ParagraphsController < ApplicationController
  before_action :require_login

  def edit
    @paragraph = Paragraph.find(params[:id])
  end

  def create
    @paragraph = Paragraph.new(paragraph_params)
    if @paragraph.save
      redirect_to root_path, success: "Your paragraph \"#{@paragraph.text}\" has been created!"
    else
      redirect_to root_path, danger: 'There was an error saving your paragraph'
    end
  end

  def update
    @paragraph = Paragraph.find(params[:id])

    if @paragraph.update(paragraph_params)
      redirect_to root_path, success: 'Paragraph updated'
    else
      render :edit, danger: 'Paragraph failed to update'
    end
  end

  def destroy
    @paragraph = Paragraph.find(params[:id])
    @paragraph.destroy

    redirect_to root_path, success: "\"#{@paragraph.text}\" has been deleted!"
  end

  private

  def paragraph_params
    params.require(:paragraph).permit(:text)
  end
end