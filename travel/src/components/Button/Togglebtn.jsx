import styled from "styled-components"


const Boxtoggle = styled.div`
   
    position: relative;
`;
const Label = styled.label`
    background: #23252C;
    border-radius: 50px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px;
    position: relative;
    height:26px;
    width: 50px;

    transform: scale(1.5);
    transition: background .5s ease-in;

    .fa-moon{
        color: #f1c40f;
    }
    .fa-sun{
        color: #f39c12;
    }

`;
const Circle = styled.div`
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top:2px;
    left:2px;

    height: 22px;
    width: 22px;

    transform: translateX(0px);
    transition: background 0.5s linear;
    transition:  0.2s linear;
`;

const Input = styled.input`
    opacity: 0;

    &:checked + .label .circle{
        transform: translateX(24px);
    }
`;

export default function Toggle(props){
    return(
     <Boxtoggle>
        <Input type="checkbox" name="toggle" checked={props.chk} class="checkbox" id="toggle" onClick={props.value} />
        <Label className="label" for="toggle">
          <i className="fa-solid fa-sun"></i>
          <i className="fa-solid fa-moon"></i>
          <Circle className="circle"></Circle>
        </Label>
      </Boxtoggle>
    )
}