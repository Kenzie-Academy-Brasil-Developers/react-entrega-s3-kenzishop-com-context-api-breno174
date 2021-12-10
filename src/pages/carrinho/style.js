import styled from "styled-components";

export const Counteiner = styled.aside`
  width: 340px;
  height: 100vh;
  padding: 0px 10px;
  background-color: var(--black-ligth);
  display: ${(props) => (props.window ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 0px;
  color: whitesmoke;
`;

export const Back = styled.section`
  width: calc(100vw - 300px);
  height: 100vh;
  display: ${(props) => (props.window ? "flex" : "none")};
  background-color: rgb(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Heade = styled.div`
  height: 60px;
  font-size: 20px;
  padding: 8px;
  margin: 10px 8px;
  border: 1px solid white;
`;

export const Content = styled.section`
  box-sizing: border-box;
  max-height: 550px;
  width: 100%;
  margin: 2px 3px;
  margin-bottom: 25px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const Button = styled.button`
  padding: 8px 19px;
  background-color: var(--roxo);
  color: white;
  font-weight: bold;
  border: 2px solid var(--blue-react);
  margin: 8px 0px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  .car-description {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .car-price {
  }
  .car-image {
    width: 60px;
    height: 40px;
    margin-right: 10px;
  }
  .car-title {
  }
  .card-remove {
    background-color: var(--gray);
    color: inherit;
    border: none;
  }
`;
/**
 * <Container whiteSchema={whiteSchema} type="button" {...rest}>
 * background: ${(props) => (props.whiteSchema ? "#11995e" : "#403CAA")};
 * color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#f5f5f5")};
 */
