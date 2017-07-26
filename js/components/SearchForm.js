class SearchForm {
  constructor(onSubmit) {
    this.onSubmit = onSubmit;
  }

  render(){
    const that = this;
    const form = document.getElementById('form');
    const input = document.createElement("INPUT");
    const button = document.createElement("BUTTON");
    button.appendChild(document.createTextNode("SEARCH"));

    form.appendChild(input);
    form.appendChild(button);

    button.addEventListener("click", function(event){
      event.preventDefault();
      that.onSubmit(input.value);
    });
  }
}

export default SearchForm;
