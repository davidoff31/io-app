/**
 * The root saga that forks and includes all the other sagas.
 */
import { networkEventsListenerSaga } from "react-native-offline";
import { all, Effect, fork } from "redux-saga/effects";
import sessionSaga from "./session";
import onboardingSaga from "./onboarding";
import profileSaga from "./profile";
import messagesSaga from "./messages";
import mainSaga from "./main";

// Parameters used by the withNetworkConnectivity HOC of react-native-offline.
// We use `withRedux: true` to store the network status in the redux store.
// More info at https://github.com/rauliyohmc/react-native-offline#withnetworkconnectivity
const connectionMonitorParameters = {
  withRedux: true,
  timeout: 5000,
  pingServerUrl: "https://google.com",
  withExtraHeadRequest: true,
  checkConnectionInterval: 2500
};

export default function* root(): Iterator<Effect> {
  yield all([
    fork(sessionSaga),
    fork(onboardingSaga),
    fork(mainSaga),
    fork(profileSaga),
    fork(messagesSaga),
    fork(networkEventsListenerSaga, connectionMonitorParameters)
  ]);
}
