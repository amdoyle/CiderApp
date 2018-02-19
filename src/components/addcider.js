import React from 'react';

export default class AddCider extends React.Component {
  render() {
    return(
      <form action="" className="add-cider">
          <h2>Add a Cider</h2>
          <div>
            <label htmlFor="cider-name">Cider Name: <input type="text" id="cider-name" name="cider-name" /></label>
          </div>
          <div>
            <lable htmlFor="brewer-name">Brewer: <input type="text" id="brewer" name="brewer-name" /></lable>
          </div>
          <div>
            <lable htmlFor="alcohol-percent">Alcohol Percentage: <input type="number" name="alcohol-percent" id="alcohol" /> %</lable>
          </div>
          <feildset>
            <legend htmlFor="flavor">Flavour Notes:</legend>
            <label htmlFor="cinnamon"><input type="checkbox" id="cinnamon" value="cinnamon" name="falvor" />Cinnamon</label>
            <label htmlFor="ginger"><input type="checkbox" id="ginger" value="ginger" ame="falvor" />Ginger</label>
            <label htmlFor="honey"><input type="checkbox" id="honey" value="honey" name="falvor" />Honey</label>
            <label htmlFor="berry"><input type="checkbox" id="berry" value="berry" name="falvor" />Berry</label>
            <label htmlFor="apple"><input type="checkbox" id="apple" value="apple" name="falvor" />Just Apple</label>
            <label htmlFor="cranberry"><input type="checkbox" id="cranberry" value="cranberry"  name="falvor" />Cranberry</label>
            <label htmlFor="bitter"><input type="checkbox" id="bitter" value="bitter" name="falvor" />Bitter</label>
          </feildset>
          <fieldset>
            <legend htmlFor="sweetness">Sweetness Rating:</legend>
            <label htmlFor="very-dry"><input type="radio" id="very-dry" value="very-dry"  name="sweetness" />Very Dry</label>
            <label htmlFor="dry"><input type="radio" id="dry" value="dry" name="sweetness" />Dry</label>
            <label htmlFor="blanced"><input type="radio" id="balanced" value="balanced" name="sweetness" />Balanced</label>
            <label htmlFor="semi-sweet"><input type="radio" id="semi-sweet" value="semi-sweet" name="sweetness" />Semi-Sweet</label>
            <label htmlFor="sweet"><input type="checkbox" id="sweet" value="sweet" name="sweetness" />Sweet</label>
          </fieldset>
          <fieldset>
            <legend htmlFor="sweetness">Overall Rating:</legend>
            <label htmlFor="one"><input type="radio" id="one" value="1"  name="rating" />One</label>
            <label htmlFor="two"><input type="radio" id="two" value="3" name="rating" />Two</label>
            <label htmlFor="three"><input type="radio" id="three" value="3" name="rating" />Three</label>
            <label htmlFor="four"><input type="radio" id="four" value="4" name="rating" />Four</label>
            <label htmlFor="five"><input type="checkbox" id="five" value="5" name="rating" />Five</label>
          </fieldset>
          <input type="submit" value="submit" />
      </form>
    )
  }
}
