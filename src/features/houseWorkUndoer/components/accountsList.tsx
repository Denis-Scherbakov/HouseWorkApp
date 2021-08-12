import styles from "styled-components";
import { Redirect } from "react-router-dom";
import { logOff, redirectToLogin } from "../houseWorkSlice";
import { useAppSelector } from "../../../app/hooks";
import { useAppDispatch } from "../../../app/hooks";
import Lily from "../images/Lilly.png";
import Jack from "../images/Jack.png";
import Mary from "../images/Mary.png";
import Leave from "../images/Leave.png";
import { AdminAccountList } from "./adminAccountList";

const StyledAccountsList = styles.ul`
  list-style-type: none;
  margin-left: 48px;
  margin-top: 96px;
`;

const StyledAccountItem = styles.li`
    width: 360px;
    height: 164px;
    border-radius: 8px;
    background-color: #FFE8DB;
`;

const AccountInfoWrapper = styles.div`
    position: relative;
`;

const StyledAccountImage = styles.img`
    position: absolute;
    top: 26px;
    left: 20px;
    height: 116px;
    width: 121px;
    border-radius: 100%;
    border: none;
`;

const StyledAccountGreetings = styles.p`
    position: absolute;
    top: 20px;
    left: 160px;
    font-size: 24px;
`;

const StyledAccountPointsWrapper = styles.div`
    position: absolute;
    top: 90px;
    left: 160px;
    width: 90px;
    height: 40px;
    color: white;
    background-color: #FF8933;
`;

const StyledAccountPoints = styles.p`
    margin-top: 5px;
    margin-left: 14px;
    margin-right: 14px;
    width: 66px;
    height: 20px;
    font-size: 20px;
`;

const StyledLeaveAccountInput = styles.input`
  display: none;
`;

const StyledLeaveImage = styles.img`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;

const StyledLeaveP = styles.p`
  position: absolute;
  top: 0px;
  right: 40px;
  font-size: 14px;
  cursor: pointer;
  color: #555555;
`;

const StyledAdminAcc = styles.li`
  width: 360px;
  height: 164px;
  border-radius: 8px;
  background-color: #FFE8DB;
`;

const AdminAccountListWrapper = styles.div`
  margin-top: 80px;
`;

export const AccountsList = () => {
  const state = useAppSelector((state) => state.houseWork.accounts);
  const dispatch = useAppDispatch();
  const srcPicture = [Lily, Jack, Mary];

  const leaveAcc = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(redirectToLogin(event.currentTarget.value));
    dispatch(logOff(event.currentTarget.value));
  };

  return (
    <StyledAccountsList>
      {state.map((item) => (
        <>
          {item.status === "logged in" && item.isAdmin === false && (
            <StyledAccountItem>
              <AccountInfoWrapper>
                <StyledAccountImage
                  src={srcPicture[item.pictureIndex]}
                  alt={item.name}
                ></StyledAccountImage>
                <StyledAccountGreetings>
                  Hello, {item.name}!
                </StyledAccountGreetings>
                <StyledAccountPointsWrapper>
                  <StyledAccountPoints>{item.points} HC</StyledAccountPoints>
                </StyledAccountPointsWrapper>
                <StyledLeaveAccountInput
                  type="checkbox"
                  value={item.id}
                  id="Leave"
                  onChange={leaveAcc}
                />
                <label htmlFor="Leave">
                  <StyledLeaveImage src={Leave} alt="Leave"></StyledLeaveImage>
                  <StyledLeaveP>Leave</StyledLeaveP>
                </label>
              </AccountInfoWrapper>
            </StyledAccountItem>
          )}
          {item.status === "logged in" && item.isAdmin === true && (
            <>
              <StyledAdminAcc>
                <AccountInfoWrapper>
                  <StyledAccountImage
                    src={srcPicture[item.pictureIndex]}
                    alt={item.name}
                  ></StyledAccountImage>
                  <StyledAccountGreetings>
                    Hello, {item.name}!
                  </StyledAccountGreetings>
                  <StyledLeaveAccountInput
                    type="checkbox"
                    value={item.id}
                    id="Leave"
                    onChange={leaveAcc}
                  />
                  <label htmlFor="Leave">
                    <StyledLeaveImage
                      src={Leave}
                      alt="Leave"
                    ></StyledLeaveImage>
                    <StyledLeaveP>Leave</StyledLeaveP>
                  </label>
                </AccountInfoWrapper>
              </StyledAdminAcc>
              <AdminAccountListWrapper>
                <AdminAccountList />
              </AdminAccountListWrapper>
            </>
          )}
        </>
      ))}

      {state.map((item) => item.leave === true && <Redirect to="/Login" />)}
    </StyledAccountsList>
  );
};
