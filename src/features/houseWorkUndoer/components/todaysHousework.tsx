import { CompleteTaskMenu } from "./completeTaskMenu";
import { HouseWorkCompleted } from "./houseWorkCompleted";
import styles from "styled-components";
import { TodoI } from "../houseWorkSlice";
import { useAppSelector } from "../../../app/hooks";
import { toggleMenu } from "../houseWorkSlice";
import { useAppDispatch } from "../../../app/hooks";

const StyledHouseworkList = styles.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  margin-top: 24px;
  width: 1200px;
`;

const StyledHouseWorkItem = styles.li`
  position: relative;
  margin: 20px;
  list-style-type: none;
  width: 240px;
  height: 240px;
  background-color: ${(props: Partial<TodoI>) => {
    if (props.points !== undefined && props.points >= 125) {
      return "#FF467D";
    } else if (props.points !== undefined && props.points >= 100) {
      return "#FF5F5F";
    } else if (props.points !== undefined && props.points >= 75) {
      return "#FE8368";
    } else if (props.points !== undefined && props.points >= 50) {
      return "#FFB966";
    }
  }};
  border-radius: 8px;
`;

const ListItemPointsWrapper = styles.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 47px;
  height: 32px;
  background-color: rgba(100, 6, 6, 0.25);
  margin-left: 193px;
  border-radius: 0px 8px;
`;

const StyledListItemPoints = styles.span`
  margin: 3px;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const ItemTaskWrapper = styles.div`
  top: 360px;
  width: 200px;
`;

const StyledListItemTask = styles.div`
  color: white;
  margin-top: 150px;
  margin-left: 20px;
  overflow-wrap: break-word;
  width: 200px;
  font-weight: 700;
`;

const StyledCompleteTaskBtn = styles.button`
  position: absolute;
  top: 0px;
  cursor:pointer;
  background: transparent;
  border: none;
  width: 240px;
  height: 240px;
`;

export const TodaysHousework = () => {
  const state = useAppSelector((state) => state.houseWork.todos);
  const dispatch = useAppDispatch();

  const toggleCompleteTaskMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatch(toggleMenu(event.currentTarget.value));
  };

  return (
    <StyledHouseworkList>
      {state
        .slice()
        .sort(function (a, b) {
          return b.points - a.points;
        })
        .map((item) => (
          <StyledHouseWorkItem points={item.points}>
            <ListItemPointsWrapper>
              <StyledListItemPoints>{item.points}</StyledListItemPoints>
            </ListItemPointsWrapper>
            <ItemTaskWrapper>
              <StyledListItemTask>{item.title}</StyledListItemTask>
            </ItemTaskWrapper>
            <StyledCompleteTaskBtn
              value={item.id}
              onClick={toggleCompleteTaskMenu}
            ></StyledCompleteTaskBtn>
            {item.showMenu === true && item.status === "not done" && (
              <CompleteTaskMenu value={item.id} title={item.title} />
            )}
            {item.status === "done" && (
              <HouseWorkCompleted points={item.points}></HouseWorkCompleted>
            )}
          </StyledHouseWorkItem>
        ))}
    </StyledHouseworkList>
  );
};
