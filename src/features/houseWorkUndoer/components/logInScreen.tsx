import { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "styled-components";
import { toggleAccountEnter, logginInAccount } from "../houseWorkSlice";
import { useAppSelector } from "../../../app/hooks";
import { useAppDispatch } from "../../../app/hooks";
import Lily from "../images/Lilly.png";
import Jack from "../images/Jack.png";
import Mary from "../images/Mary.png";
import InputShowPassword from "../images/InputShowPassword.png";

const StyledAccountsList = styles.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  width: 90%;
  height: 85vh;
  justify-content: center;
  align-items: center;
`;

const StyledAccountButton = styles.button`
  position: relative;
  height: 166px;
  width: 171px;
  margin-left: 90px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

const StyledAccountsListItem = styles.li`
  position: relative;
  list-style: none;
`;

const StyledAccounImage = styles.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 166px;
  width: 171px;
  border-radius: 100%;
  border: none;
`;

const StyledAccountName = styles.p`
  position: absolute;
  top: 160px;
  left: 60px;
  font-size: 24px;
`;

const StyledAccountAge = styles.p`
  position: absolute;
  top: 210px;
  left: 45px;
  font-size: 14px;
`;

const PasswordWrapper = styles.div`
  position: relative;
`;

const StyledPasswordInput = styles.input`
  position: absolute;
  top: 100px;
  left: -30px;
  width: 340px;
  height: 40px;
  padding-left: 19px;
  border: 2px solid #555555;
  box-sizing: border-box;
`;

const StyledLoginButton = styles.button`
  position: absolute;
  top: 100px;
  left: 300px;
  width: 80px;
  height: 40px;
  margin-left: 20px;
  background: #FF8933;
  cursor: pointer;
  border: none;
  color: white;
`;

const StyledShowPassword = styles.input`
  position: absolute;
  top: 100px;
  display: none;
`;

const StyledShowPasswordImg = styles.img`
  position: absolute;
  top: 114px;
  left: 288px;
  width: 16.5px;
  height: 11.25px;
  cursor: pointer;
`;

export const LoginScreen = () => {
  const srcPicture = [Lily, Jack, Mary];
  const stateAccounts = useAppSelector((state) => state.houseWork.accounts);
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const toggleAccounts = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleAccountEnter(event.currentTarget.value));
  };

  const enterPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logginInAccount(event.currentTarget.value));
  };

  const togglePasswordVisibility = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (type === "password") {
      setType("text");
    } else setType("password");
  };

  return (
    <StyledAccountsList>
      {stateAccounts.map(
        (item) =>
          item.showAcc === true && (
            <StyledAccountsListItem>
              <StyledAccountButton value={item.id} onClick={toggleAccounts}>
                <StyledAccounImage
                  src={srcPicture[item.pictureIndex]}
                  alt={item.name}
                />
                <StyledAccountName>{item.name}</StyledAccountName>
                <StyledAccountAge>{item.age} years old</StyledAccountAge>
              </StyledAccountButton>
              {item.showPasswordInput === true && (
                <PasswordWrapper>
                  <StyledPasswordInput
                    type={type}
                    value={password}
                    onChange={enterPassword}
                  ></StyledPasswordInput>
                  <StyledShowPassword
                    onChange={togglePasswordVisibility}
                    id="showPwd"
                    type="checkbox"
                  ></StyledShowPassword>
                  <label htmlFor="showPwd">
                    <StyledShowPasswordImg
                      src={InputShowPassword}
                      alt="ShowPassword"
                    ></StyledShowPasswordImg>
                  </label>
                  <StyledLoginButton value={password} onClick={signIn}>
                    Sign in
                  </StyledLoginButton>
                  {item.status === "logged in" && (
                    <Redirect to="/todaysHouseWork" />
                  )}
                </PasswordWrapper>
              )}
            </StyledAccountsListItem>
          )
      )}
    </StyledAccountsList>
  );
};
