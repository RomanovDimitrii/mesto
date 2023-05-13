export class Section {
  constructor(item, photoElement) {
    this._renderedItems = item;
    //   this._renderer = renderer;
    this._photoElement = photoElement;
  }

  // renderer() {
  //   console.log(this._renderedItems);
  //   this._renderedItems.forEach(item => this._renderer(item));
  // }

  addItem(element) {
    this._photoElement.prepend(element);
  }
}
