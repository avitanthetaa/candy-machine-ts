import styled from "styled-components";

const Container = styled("div")`
  height: auto;
  margin-top: 100px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  // position: relative;
`;

// const Grid = styled("div")`
//   height: auto;
//   margin-top: 100px;
//   display: grid;
//   grid-template-columns: repeat(2, minmax(0, 1fr));
// `;

// const Title = styled("h1")`
//   margin: 0;
//   white-space: nowrap;
//   font-family: "Bungee", cursive;
// `;

// const Img1 = styled("img")`
//   height: 100vh;
//   width: 100vw;
//   overflow-x: hidden;
// `;

// const OverFlowHidden = styled("div")`
//   overflow: hidden;
// `;

// const Link = styled("a")`
//   font-size: 1.5rem;
//   margin: 1rem;
//   cursor: pointer;
//   color: initial;
//   text-decoration: none;

//   position: absolute;
//   right: 5%;

//   @media (max-width: 700px) {
//     position: initial;
//   }
// `;

const TheImages = () => {
  return (
    <Container>
      {/* <Title>
                Titan Dogs
            </Title>
            <Link href="/#roadmap">
                Roadmap
            </Link> */}

      {/* <Grid> */}
      {/* <OverFlowHidden>
        <Img1
          src="https://cdn.discordapp.com/attachments/999351099851026493/1060230259661885570/Fk7iAFcXEAA78L1.png"
          alt=""
        />
      </OverFlowHidden> */}
      {/* </Grid> */}
    </Container>
  );
};

export default TheImages;
