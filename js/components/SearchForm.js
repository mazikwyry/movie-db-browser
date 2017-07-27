class SearchForm {
  constructor(onSubmit) {
    this.onSubmit = onSubmit;
  }

  render(){
    const that = this;
    const form = document.getElementById('form');

    // Create input
    const input = document.createElement("INPUT");
    input.setAttribute('placeholder', 'Search movies here...');

    // Create submit button
    const button = document.createElement("BUTTON");
    button.appendChild(document.createTextNode("SEARCH"));

    form.appendChild(input);
    form.appendChild(button);

    // Bind callback to button click
    button.addEventListener("click", function(event){
      event.preventDefault();
      that.onSubmit(input.value);
    });
  }
}

export default SearchForm;
