import { fromNullable } from "fp-ts/lib/Option";
import { capitalize } from "lodash";
import { Text, View } from "native-base";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CreatedMessageWithContent } from "../../../definitions/backend/CreatedMessageWithContent";
import { ServicePublic } from "../../../definitions/backend/ServicePublic";
import I18n from "../../i18n";
import { navigateToWalletHome } from "../../store/actions/navigation";
import { PaidReason } from "../../store/reducers/entities/payments";
import customVariables from "../../theme/variables";
import {
  format,
  formatDateAsDay,
  formatDateAsLocal,
  formatDateAsMonth
} from "../../utils/dates";
import {
  isExpirable,
  isExpired,
  isExpiring,
  paymentExpirationInfo
} from "../../utils/messages";
import CalendarIconComponent from "./CalendarIconComponent";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled case in switch. Value should be never, received this instead: ${value}`
  );
};

type OwnProps = {
  message: CreatedMessageWithContent;
  service?: ServicePublic;
  payment?: PaidReason;
};

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

type PaymentStatus =
  | "paid"
  | "expiring"
  | "expiredNotExpirable"
  | "expiredAndExpirable"
  | "valid";

const CALENDAR_ICON_HEIGHT = 40;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: customVariables.contentPadding,
    paddingVertical: customVariables.appHeaderPaddingHorizontal,
    alignItems: "center",
    minHeight:
      CALENDAR_ICON_HEIGHT + 2 * customVariables.appHeaderPaddingHorizontal
  },
  text: {
    flex: 1,
    paddingRight: 50,
    paddingLeft: 5
  },
  highlight: {
    color: customVariables.brandHighlight
  },
  center: {
    justifyContent: "center"
  }
});

// Every possible state of the payment has it's component
const PaidTextContent: React.FunctionComponent<{
  onPress: () => void;
}> = ({ onPress }) => (
  <>
    {`${I18n.t("messages.cta.payment.paid")} `}
    <Text link={true} onPress={onPress}>
      {I18n.t("wallet.wallet")}
    </Text>
  </>
);

const ExpiringTextContent: React.FunctionComponent<{
  time: string;
  date: string;
}> = ({ time, date }) => (
  <>
    {I18n.t("messages.cta.payment.expiringAlert.block1")}
    <Text bold={true} white={true}>{` ${date} `}</Text>
    {I18n.t("messages.cta.payment.expiringAlert.block2")}
    <Text bold={true} white={true}>{` ${time} `}</Text>
  </>
);

const ExpiredAndExpirableTextContent: React.FunctionComponent<{
  time: string;
  date: string;
}> = ({ time, date }) => (
  <>
    {I18n.t("messages.cta.payment.expiredAlert.expirable.block1")}
    <Text bold={true} white={true}>{` ${time} `}</Text>
    {I18n.t("messages.cta.payment.expiredAlert.expirable.block2")}
    <Text bold={true} white={true}>{` ${date}`}</Text>
  </>
);

const ValidTextContent: React.FunctionComponent<{
  time: string;
  date: string;
}> = ({ time, date }) => (
  <>
    {I18n.t("messages.cta.payment.addMemo.block1")}
    <Text bold={true}>{` ${date} `}</Text>
    {"["}
    {I18n.t("messages.cta.payment.addMemo.block2")}
    <Text bold={true}>{` ${time}`}</Text>
    {"]"}
  </>
);

const ExpiredNotExpirableTextContent: React.FunctionComponent = () => (
  <>{I18n.t("messages.cta.payment.expiredAlert.unexpirable.block")}</>
);

const TextContent: React.FunctionComponent<{
  status: PaymentStatus;
  dueDate: Date;
  onPaidPress: () => void;
}> = ({ status, dueDate, onPaidPress }) => {
  const time = format(dueDate, "HH.mm");
  const date = formatDateAsLocal(dueDate, true, true);
  return status === "paid" ? (
    <PaidTextContent onPress={onPaidPress} />
  ) : status === "expiring" ? (
    <ExpiringTextContent time={time} date={date} />
  ) : status === "expiredAndExpirable" ? (
    <ExpiredAndExpirableTextContent time={time} date={date} />
  ) : status === "expiredNotExpirable" ? (
    <ExpiredNotExpirableTextContent />
  ) : status === "valid" ? (
    <ValidTextContent time={time} date={date} />
  ) : (
    assertNever(status)
  );
};

const getCalendarIconBackgoundColor = (status: PaymentStatus) =>
  status === "paid"
    ? customVariables.lighterGray
    : status === "expiring" ||
      status === "expiredAndExpirable" ||
      status === "expiredNotExpirable"
    ? customVariables.colorWhite
    : status === "valid"
    ? customVariables.brandDarkGray
    : assertNever(status);

const getCalendarTextColor = (status: PaymentStatus) =>
  status === "paid"
    ? customVariables.colorWhite
    : status === "expiring" || status === "expiredNotExpirable"
    ? customVariables.calendarExpirableColor
    : status === "expiredAndExpirable"
    ? customVariables.brandDarkGray
    : status === "valid"
    ? customVariables.colorWhite
    : assertNever(status);

// The calendar icon is shown if:
// - the payment related to the message is not yet paid
// - the message has a due date
const CalendarIcon: React.FunctionComponent<{
  status: PaymentStatus;
  dueDate: Date;
}> = ({ status, dueDate }) => {
  const iconBackgoundColor = getCalendarIconBackgoundColor(status);

  const textColor = getCalendarTextColor(status);

  return (
    <CalendarIconComponent
      month={capitalize(formatDateAsMonth(dueDate))}
      day={formatDateAsDay(dueDate)}
      backgroundColor={iconBackgoundColor}
      textColor={textColor}
    />
  );
};

const bannerStyle = (status: PaymentStatus): ViewStyle =>
  status === "paid"
    ? { backgroundColor: customVariables.brandGray }
    : status === "expiredAndExpirable"
    ? { backgroundColor: customVariables.brandDarkGray }
    : status === "expiredNotExpirable"
    ? { backgroundColor: customVariables.calendarExpirableColor }
    : status === "expiring"
    ? { backgroundColor: customVariables.calendarExpirableColor }
    : status === "valid"
    ? { backgroundColor: customVariables.brandGray }
    : assertNever(status);

const isPaymentExpirable = (message: CreatedMessageWithContent): boolean =>
  paymentExpirationInfo(message).fold(false, isExpirable);

const isPaymentExpired = (message: CreatedMessageWithContent): boolean =>
  paymentExpirationInfo(message).fold(false, isExpired);

const isPaymentExpiring = (message: CreatedMessageWithContent): boolean =>
  paymentExpirationInfo(message).fold(false, isExpiring);

const paid = (payment: PaidReason | undefined): boolean =>
  payment !== undefined;

const calculatePaymentStatus = (
  payment: PaidReason | undefined,
  message: CreatedMessageWithContent
): PaymentStatus => {
  if (isPaymentExpired(message) && isPaymentExpirable(message)) {
    return "expiredAndExpirable";
  } else if (isPaymentExpired(message) && !isPaymentExpirable(message)) {
    return "expiredNotExpirable";
  } else if (isPaymentExpiring(message)) {
    return "expiring";
  } else if (paid(payment)) {
    return "paid";
  } else {
    return "valid";
  }
};

/**
 * A component to show detailed info about the due date of a message
 */
const MessageDueDateBar: React.FunctionComponent<Props> = ({
  onGoToWallet,
  message,
  payment
}) => {
  /**
   * Display description on message deadlines
   */

  const paymentStatus = calculatePaymentStatus(payment, message);
  return fromNullable(message.content.due_date).fold(null, dueDate => (
    <>
      <View
        style={[
          styles.container,
          bannerStyle(paymentStatus),
          paymentStatus === "paid" ? styles.center : undefined
        ]}
      >
        <>
          <CalendarIcon status={paymentStatus} dueDate={dueDate} />
          <View hspacer={true} small={true} />

          <Text
            style={styles.text}
            white={
              paymentStatus === "expiring" ||
              paymentStatus === "expiredAndExpirable" ||
              paymentStatus === "expiredNotExpirable"
            }
          >
            <TextContent
              status={paymentStatus}
              dueDate={dueDate}
              onPaidPress={onGoToWallet}
            />
          </Text>
        </>
      </View>
      <View spacer={true} large={true} />
    </>
  ));
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onGoToWallet: () => dispatch(navigateToWalletHome())
});

export default connect(undefined, mapDispatchToProps)(MessageDueDateBar);
