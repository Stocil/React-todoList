export function getSelectedText(currentSelected) {
  switch (currentSelected) {
    case "new": {
      return "New ones first";
    }
    case "old": {
      return "The old first";
    }
    case "A-Z": {
      return "A-Z";
    }
    case "Z-A": {
      return "Z-A";
    }
    default: {
      throw Error("Wrong sort name: ", currentSelected);
    }
  }
}
