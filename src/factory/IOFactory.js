import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class IOFactory {
  static createInputView() {
    return new InputView();
  }

  static createOutputView() {
    return new OutputView();
  }
}

export default IOFactory;
