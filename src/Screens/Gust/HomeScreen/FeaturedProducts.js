
// import SwipeableViews from "react-swipeable-views";
// import { useState } from "react";
// import StarIcon from "@material-ui/icons/Star";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import StarHalfIcon from "@material-ui/icons/StarHalf";
// import TurnedInNotIcon from "@material-ui/icons/TurnedInNot"
// import {
//   FlexBox,
//   FlexColumn,
//   FlexRow,
//   InnerSection,
//   Typography,
// } from "../../../App.Styles";
// import {
//   HeroBox,
//   HeroTitle,
//   SideBox,
//   CardBox,
//   CardTitle,
//   Line,
//   Cards,
//   CardContainer,
//   CardImg,
//   StarBox,
//   ButtonsBox,
//   HeadBorder,
//   DotsBox,
//   SliderDots,
//   SliderImg,
//   Arrow,
// } from "./HomeScreen.Styles";
// import Button from "../../../Components/Button/Button"
// import Cardimg from "../../../Assets/Screenshot 2021-06-15 114138.png";
// import ProductCard from "../../../Components/ProductsCard/ProductCard"

// const styles = {
//   root: {
//     position: "relative",
//     width: "100%",
//     height: 678,
//   },
// }; 

// const StyleObj = {
//   fontSize: 28,
//   color: "#FCDD06",
//   fill: "#FCDD06",
//   // margin:"auto 0 auto 32px"
// };


// export default function FeaturedProducts({Products}) {

//     const [sliderIndex, setSliderIndex] = useState(0);

//   const handleChangeIndex = () => {};  

//   const chunkSize =
//   window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;

//   const getSlides= () => {
//     const chunks= [];

//     Products.map((i, indx)=> {
//       if (indx % chunkSize === 0) {
//         chunks.push([]);
//       }
//       const firstArrayLength = chunks.length;
//       const secondArrayLength = chunks[firstArrayLength - 1].length;

//       chunks[firstArrayLength - 1][secondArrayLength] = i;

//       return i;
//     });

//     return chunks.map((i, idx) => (
//       <FlexRow key={idx}>
//         {i.map((item) => (
//           <ProductCard
//             key={item._id}
//             id={item._id}
//             image={"https://proshop-ms.herokuapp.com/" + item.image}
//             name={item.name}
//             discount={0}
//             price={item.price}
//             rate={item.rating}
//           />
//         ))}
//       </FlexRow>
//     ));

//   }

//     return (
//       <FlexBox color={"#F7F8FC"}>
//         <InnerSection>
//           <CardContainer>
//             <CardTitle>Featured Products </CardTitle>
//             <HeadBorder />
//             <Line />

//             <SwipeableViews
//           style={Object.assign({}, styles.root, styles.root)}
//           index={sliderIndex}
//           onChangeIndex={handleChangeIndex}
//         >
//           {getSlides()}
//         </SwipeableViews>
//             <Cards>
//               <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
//               {getSlides().map((i, idx) => (
//             <SliderDots
//               size={14}
//               key={idx}
//               isGray={sliderIndex !== idx}
//               onClick={() => {
//                 setSliderIndex(idx);
//               }}
//             />
//           ))}

//                 {/* <CardImg src={Cardimg} /> */}
//                 {/* <Typography fontSize={24}>
//                   Apple iPhone 11 Pro 256GB Memory
//                 </Typography> */}
//                 {/* <StarBox>
//                   <StarIcon style={StyleObj} />
//                   <StarIcon style={StyleObj} />
//                   <StarIcon style={StyleObj} />
//                   <StarHalfIcon style={StyleObj} />
//                   <StarBorderIcon style={StyleObj} />
//                 </StarBox> */}
//                 {/* <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
//                   $499.99
//                 </Typography> */}
//                 {/* <ButtonsBox>
//                   <Button
//                     text={<TurnedInNotIcon />}
//                     width={"54px"}
//                     borderRadius={10}
//                     isGray={true}
//                     style={{ marginTop: 20, height: 62 }}
//                   >
//                     {" "}
//                   </Button>
//                   <Button
//                     text="Add to cart"
//                     width={"324px"}
//                     borderRadius={10}
//                     isGray={true}
//                     style={{ marginTop: 20, height: 62, marginLeft: 13 }}
//                   />
//                 </ButtonsBox> */}
//                 </CardBox>
//               {/* 
//               <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
//                 <CardImg src={Cardimg} />
//                 <Typography fontSize={24}>Canon Eos 80D DSLR Camera</Typography>
//                 <StarBox>
//                   <StarIcon style={StyleObj} />
//                   <StarIcon style={StyleObj} />
//                   <StarIcon style={StyleObj} />
//                   <StarHalfIcon style={StyleObj} />
//                   <StarBorderIcon style={StyleObj} />
//                 </StarBox>
//                 <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
//                   $799.99
//                 </Typography>
//                 <ButtonsBox>
//                   <Button
//                     text={<TurnedInNotIcon />}
//                     width={"54px"}
//                     borderRadius={10}
//                     isGray={true}
//                     style={{ marginTop: 20, height: 62 }}
//                   >
//                     {" "}
//                   </Button>
//                   <Button
//                     text="Add to cart"
//                     width={"324px"}
//                     borderRadius={10}
//                     isGray={true}
//                     style={{ marginTop: 20, height: 62, marginLeft: 13 }}
//                   />
//                 </ButtonsBox>
//               </CardBox> */}
//               {/* <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
//                 <CardImg src={Cardimg} />
//                 <Typography fontSize={24}>Canon Eos 80D DSLR Camera</Typography>
//                 <StarBox>
//                   <StarIcon style={StyleObj} />
//                   <StarIcon style={StyleObj} />
//                   <StarIcon style={StyleObj} />
//                   <StarHalfIcon style={StyleObj} />
//                   <StarBorderIcon style={StyleObj} />
//                 </StarBox>
//                 <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
//                   $799.99
//                 </Typography>
//                 <ButtonsBox>
//                   <Button
//                     text={<TurnedInNotIcon />}
//                     width={"54px"}
//                     borderRadius={10}
//                     isGray={true}
//                     style={{ marginTop: 20, height: 62 }}
//                   >
//                     {" "}
//                   </Button>
//                   <Button
//                     text="Add to cart"
//                     width={"324px"}
//                     borderRadius={10}
//                     isGray={true}
//                     style={{ marginTop: 20, height: 62, marginLeft: 13 }}
//                   />
//                 </ButtonsBox>
//               </CardBox> */}
              
//             </Cards>
//           </CardContainer>
//         </InnerSection>
//       </FlexBox>
//     )
// }
