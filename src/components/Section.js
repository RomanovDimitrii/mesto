export class Section {
  constructor({ items, renderer }, photoElement) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._photoElement = photoElement;
  }

  renderer() {
    this._renderedItems.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._photoElement.prepend(element);
  }
}
