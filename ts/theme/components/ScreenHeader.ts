import { Theme } from "../types";
import variables from "../variables";

export default (): Theme => ({
  "NativeBase.ViewNB": {
    "NativeBase.H1": {
      marginLeft: variables.titleHeaderPaddingHorizontal
    },
    "NativeBase.H2": {
      marginLeft: variables.titleHeaderPaddingHorizontal
    },
    "NativeBase.H3": {
      marginHorizontal: variables.titleHeaderPaddingHorizontal,
      lineHeight: 40
    },
    "NativeBase.ViewNB": {
      // margin to align icon to the baseline of the title
      marginBottom: 0,
      marginTop: variables.gridGutter,
      marginRight: variables.titleHeaderPaddingHorizontal
    },
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: variables.contentBackground
  }
});
