import React from 'react';

export default class AddCider extends React.Component {
  constructor() {
    super();
    // binding the this event to work within addNewCider;
    this.addNewCider = this.addNewCider.bind(this);
  }

  addNewCider = (event) => {
    event.preventDefault();

    //extracting the checked values from the flavor checkboxes
    const flavorFieldSet = this.flavor.children;
    const flavorFieldSetCheckBox = Array.prototype.slice.call(flavorFieldSet);
    const flavorsChecked = flavorFieldSetCheckBox.filter(item => item.checked);

    //extracting the selected values from the sweetness checkboxes
    const sweetnessFieldSet = this.sweetness.children;
    const sweetnessFieldSetCheckBox = Array.prototype.slice.call(sweetnessFieldSet);
    const sweetnesssChecked = sweetnessFieldSetCheckBox.filter(item => item.checked);

    //extracting the selected values from the sweetness checkboxes
    const ratingFieldSet = this.rating.children;
    const ratingFieldSetCheckBox = Array.prototype.slice.call(ratingFieldSet);
    const ratingsChecked = ratingFieldSetCheckBox.filter(item => item.checked);

    const cider = {
      name: this.name.value,
      brewer: this.brewer.value,
      percent: this.percent.value,
      flavor: flavorsChecked,
      sweetness: sweetnesssChecked,
      rating: ratingsChecked
    }
  };

  render() {
    return(
      <form action="" className="add-cider" onSubmit={this.addNewCider} >
          <h2>Add a Cider</h2>
          <div>
            <label htmlFor="name">Cider Name: <input type="text" id="name" name="name" ref={(input)=> {this.name = input}} /></label>
          </div>
          <div>
            <label htmlFor="brewer">Brewer: <input type="text" id="brewer" name="brewer" ref={(input)=> {this.brewer = input}} /></label>
          </div>
          <div>
            <label htmlFor="percent">Alcohol Percentage: <input type="number" name="percent" id="percent" ref={(input)=> {this.percent = input}} /> %</label>
          </div>
          <legend htmlFor="flavor">Flavour Notes:</legend>
          <fieldset ref={(input)=> {this.flavor = input}}>
            <input type="checkbox" id="cinnamon" value="cinnamon" name="falvor" /><label htmlFor="cinnamon">Cinnamon</label>
            <input type="checkbox" id="ginger" value="ginger" name="falvor" /><label htmlFor="ginger">Ginger</label>
            <input type="checkbox" id="honey" value="honey" name="falvor" /><label htmlFor="honey">Honey</label>
            <input type="checkbox" id="berry" value="berry" name="falvor" /><label htmlFor="berry">Berry</label>
            <input type="checkbox" id="apple" value="apple" name="falvor" /><label htmlFor="apple">Just Apple</label>
            <input type="checkbox" id="cranberry" value="cranberry" name="falvor" /><label htmlFor="cranberry">Cranberry</label>
            <input type="checkbox" id="bitter" value="bitter" name="falvor" /><label htmlFor="bitter">Bitter</label>
          </fieldset>
          <legend htmlFor="sweetness">Sweetness Rating:</legend>
          <fieldset ref={(input)=> {this.sweetness = input}}>
            <input type="radio" id="very-dry" value="very-dry"  name="sweetness" /><label htmlFor="very-dry">Very Dry</label>
            <input type="radio" id="dry" value="dry" name="sweetness" /><label htmlFor="dry">Dry</label>
            <input type="radio" id="balanced" value="balanced" name="sweetness" /><label htmlFor="blanced">Balanced</label>
            <input type="radio" id="semi-sweet" value="semi-sweet" name="sweetness" /><label htmlFor="semi-sweet">Semi-Sweet</label>
            <input type="radio" id="sweet" value="sweet" name="sweetness" /><label htmlFor="sweet">Sweet</label>
          </fieldset>
          <legend htmlFor="rating">Overall Rating:</legend>
          <fieldset ref={(input)=> {this.rating = input}}>
            <input type="radio" id="one" value="1"  name="rating" /><label htmlFor="one">One</label>
            <input type="radio" id="two" value="3" name="rating" /><label htmlFor="two">Two</label>
            <input type="radio" id="three" value="3" name="rating" /><label htmlFor="three">Three</label>
            <input type="radio" id="four" value="4" name="rating" /><label htmlFor="four">Four</label>
            <input type="radio" id="five" value="5" name="rating" /><label htmlFor="five">Five</label>
          </fieldset>
          <input type="submit" value="submit" />
      </form>
    )
  }
}
