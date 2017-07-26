class Paginator {
  constructor(currentPage, lastPage, onPageChange) {
    this.currentPage = currentPage;
    this.lastPage = lastPage;
    this.onPageChange = onPageChange;
  }

  previousPageButton(){
    const { currentPage } = this;
    return this.changePageButton('<<', currentPage <= 1, currentPage - 1);
  }

  nextPageButton(){
    const { currentPage, lastPage } = this;
    return this.changePageButton('>>', currentPage == lastPage, currentPage + 1);
  }

  changePageButton(text, disabledCondition, pageOperation){
    const { onPageChange } = this;
    const button = document.createElement('BUTTON');

    button.appendChild(document.createTextNode(text));
    if (disabledCondition) button.setAttribute('disabled', 'true');
    button.addEventListener("click", function(event){
      onPageChange(pageOperation);
    })
    return button;
  }

  render(){
    const { currentPage, lastPage } = this;

    const pagination = document.createElement('DIV');
    pagination.className = 'pagination';
    pagination.appendChild(this.previousPageButton());
    pagination.appendChild(document.createTextNode(`${currentPage}/${lastPage}`));
    pagination.appendChild(this.nextPageButton());

    return pagination;
  }
}

export default Paginator;
