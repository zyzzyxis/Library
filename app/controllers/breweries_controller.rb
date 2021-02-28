class BreweriesController < ApplicationController



  def index 
    @breweries = Brewery.all
    render component: "Breweries", props: {breweries: @breweries}
  end
  
  def show
    @brewery = Brewery.find(params[:id])
    @patrons = @brewery.patrons

    render component: "Brewery", props: {brewery: @brewery, patrons: @patrons}
  end
  
  def new 
  end
  
  def edit
  end






end
