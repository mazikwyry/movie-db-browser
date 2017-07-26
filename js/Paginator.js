class Paginator {
  constructor(currentPage, lastPage, onPageChange) {
    this.currentPage = currentPage;
    this.lastPage = lastPage;
    this.onPageChange = onPageChange;
  }

  previousPageButton(){
    const { onPageChange, currentPage } = this;
    const previousButton = document.createElement('BUTTON');

    previousButton.appendChild(document.createTextNode('<<'));
    if (currentPage <= 1) previousButton.setAttribute('disabled', 'true');
    previousButton.addEventListener("click", function(event){
      onPageChange(currentPage - 1);
    })
    return previousButton;
  }

  nextPageButton(){
    const { onPageChange, currentPage, lastPage } = this;
    const nextButton = document.createElement('BUTTON');

    nextButton.appendChild(document.createTextNode('>>'));
    if (currentPage == lastPage) nextButton.setAttribute('disabled', 'true');
    nextButton.addEventListener("click", function(event){
      onPageChange(currentPage + 1);
    })
    return nextButton;
  }

  render(){
    console.log(this);
    const { currentPage } = this;

    const pagination = document.createElement('DIV');
    pagination.appendChild(this.previousPageButton());
    pagination.appendChild(document.createTextNode(currentPage));
    pagination.appendChild(this.nextPageButton());

    return pagination;
  }
}

export default Paginator;
