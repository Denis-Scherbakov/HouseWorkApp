import styles from "styled-components";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { showEditPoints, editPoints } from "../houseWorkSlice";
import Lily from "../images/Lilly.png";
import Jack from "../images/Jack.png";
import Mary from "../images/Mary.png";

const StyledAccount = styles.li`
    margin-bottom: 20px;
`;

const StyledAccountInfoWrapper = styles.div`
    position: relative;
    z-index: 100;
    background-color: #FFD9DB;
    border-radius: 8px;
    position: relative;
    width: 360px;
    height: 164px;
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
    top: 40px;
    left: 240px;
    width: 90px;
    height: 40px;
    color: white;
    background-color: #F95D66;
`;

const StyledAccountPoints = styles.p`
    margin-top: 5px;
    margin-left: 14px;
    width: 66px;
    max-width: 100px;
    height: 20px;
    font-size: 20px;
`;

const StyledChangeHCWrapper = styles.div`
`;

const StyledChangeHCAmount = styles.button`
    cursor: pointer;
    margin-top: 80px;
    margin-left: 153px;
    border: none;
    background: transparent;
`;

const StyledChangeHCp = styles.p`
    color: #F95D66;
    font-size: 16px;
`;

const StyledHCinputWrapper = styles.div`
    position: relative;
    z-index: 99;
    margin-top: -164px;
    width: 360px;
    height: 260px;
    background: white;
    box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
`;

const StyledHelpCoins = styles.span`
  position: absolute;
  bottom: 64px;
  left: 20px;
  font-size: 14px;
`;

const StyledInputPointsAmount = styles.input`
  position: absolute;
  width: 90px;
  height: 40px;
  bottom: 16px;
  left: 20px;
  font-size: 16px;
`;

const StyledCancelButton = styles.button`
  position: absolute;
  bottom: 16px;
  right: 132px;
  cursor: pointer;
  width: 64px;
  height: 46px;
  color: #F95D66;
  background-color: white;
  border: 1px solid #F95D66;
`;

const StyledSaveButton = styles.button`
  position: absolute;
  bottom: 16px;
  right: 20px;
  cursor: pointer;
  width: 100px;
  height: 46px;
  color: white;
  background-color: #FF8933;
  border: none;
`;

export const AdminAccountList = () => {
  const state = useAppSelector((state) => state.houseWork.accounts);
  const dispatch = useAppDispatch();

  const [points, setPoints] = useState("");

  const srcPicture = [Lily, Jack, Mary];

  const toggleEditPoints = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(showEditPoints(event.currentTarget.value));
  };

  const userPoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(event.target.value);
  };

  const savePoints = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(editPoints(event.currentTarget.value));
  };

  console.log(points);

  return (
    <>
      {state.map((item) => (
        <>
          {item.isAdmin === false && item.status === "logged off" && (
            <StyledAccount>
              <StyledAccountInfoWrapper>
                <StyledAccountImage
                  src={srcPicture[item.pictureIndex]}
                  alt={item.name}
                ></StyledAccountImage>
                <StyledAccountGreetings>{item.name}</StyledAccountGreetings>
                <StyledAccountPointsWrapper>
                  <StyledAccountPoints>{item.points} HC</StyledAccountPoints>
                </StyledAccountPointsWrapper>
                <StyledChangeHCWrapper>
                  <StyledChangeHCAmount
                    value={item.id}
                    onClick={toggleEditPoints}
                  >
                    <StyledChangeHCp>Change HC amount</StyledChangeHCp>
                  </StyledChangeHCAmount>
                </StyledChangeHCWrapper>
              </StyledAccountInfoWrapper>
              {item.showEditPoints === true && (
                <StyledHCinputWrapper>
                  <StyledHelpCoins>Help Coins</StyledHelpCoins>
                  <StyledInputPointsAmount type="text" onChange={userPoints} />
                  <StyledCancelButton
                    value={item.id}
                    onClick={toggleEditPoints}
                  >
                    Cancel
                  </StyledCancelButton>
                  <StyledSaveButton value={points} onClick={savePoints}>
                    Save
                  </StyledSaveButton>
                </StyledHCinputWrapper>
              )}
            </StyledAccount>
          )}
        </>
      ))}
    </>
  );
};
